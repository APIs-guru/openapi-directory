import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccountUnauthorized extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error-code" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=error-code-label" })
  errorCodeLabel?: string;
}
