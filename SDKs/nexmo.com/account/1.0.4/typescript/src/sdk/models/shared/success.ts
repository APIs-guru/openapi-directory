import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Success extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error-code" })
  errorCode?: any;

  @SpeakeasyMetadata({ data: "json, name=error-code-label" })
  errorCodeLabel?: any;
}
