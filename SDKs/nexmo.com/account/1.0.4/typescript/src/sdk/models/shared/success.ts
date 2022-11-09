import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Success extends SpeakeasyBase {
  @Metadata({ data: "json, name=error-code" })
  errorCode?: any;

  @Metadata({ data: "json, name=error-code-label" })
  errorCodeLabel?: any;
}
