import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccountStatusExampleItem } from "./accountstatusexampleitem";


export class AccountStatusDataQualityIssue extends SpeakeasyBase {
  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=destination" })
  destination?: string;

  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=displayedValue" })
  displayedValue?: string;

  @Metadata({ data: "json, name=exampleItems", elemType: shared.AccountStatusExampleItem })
  exampleItems?: AccountStatusExampleItem[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lastChecked" })
  lastChecked?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=numItems" })
  numItems?: number;

  @Metadata({ data: "json, name=severity" })
  severity?: string;

  @Metadata({ data: "json, name=submittedValue" })
  submittedValue?: string;
}
