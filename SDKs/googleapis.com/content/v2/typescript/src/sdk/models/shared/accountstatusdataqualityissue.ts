import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountStatusExampleItem } from "./accountstatusexampleitem";



export class AccountStatusDataQualityIssue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: string;

  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=displayedValue" })
  displayedValue?: string;

  @SpeakeasyMetadata({ data: "json, name=exampleItems", elemType: AccountStatusExampleItem })
  exampleItems?: AccountStatusExampleItem[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastChecked" })
  lastChecked?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=numItems" })
  numItems?: number;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: string;

  @SpeakeasyMetadata({ data: "json, name=submittedValue" })
  submittedValue?: string;
}
