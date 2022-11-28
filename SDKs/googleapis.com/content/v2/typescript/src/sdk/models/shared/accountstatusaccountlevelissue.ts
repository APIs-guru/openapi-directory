import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccountStatusAccountLevelIssue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: string;

  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=documentation" })
  documentation?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
