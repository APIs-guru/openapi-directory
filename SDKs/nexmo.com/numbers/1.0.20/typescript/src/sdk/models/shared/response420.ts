import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Response420 extends SpeakeasyBase {
  @Metadata({ data: "json, name=error-code" })
  errorCode?: string;

  @Metadata({ data: "json, name=error-code-label" })
  errorCodeLabel?: string;
}
