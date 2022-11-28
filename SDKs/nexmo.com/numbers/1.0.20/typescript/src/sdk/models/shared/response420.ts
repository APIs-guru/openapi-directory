import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Response420 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error-code" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=error-code-label" })
  errorCodeLabel?: string;
}
