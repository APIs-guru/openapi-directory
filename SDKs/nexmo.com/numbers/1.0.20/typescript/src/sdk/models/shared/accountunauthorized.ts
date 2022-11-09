import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AccountUnauthorized extends SpeakeasyBase {
  @Metadata({ data: "json, name=error-code" })
  errorCode?: string;

  @Metadata({ data: "json, name=error-code-label" })
  errorCodeLabel?: string;
}
