import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Unauthorized extends SpeakeasyBase {
  @Metadata({ data: "json, name=error-code" })
  errorCode?: string;

  @Metadata({ data: "json, name=error-code-label" })
  errorCodeLabel?: string;
}
