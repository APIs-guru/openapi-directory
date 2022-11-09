import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AccountStatusAccountLevelIssue extends SpeakeasyBase {
  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=destination" })
  destination?: string;

  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=documentation" })
  documentation?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=severity" })
  severity?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
