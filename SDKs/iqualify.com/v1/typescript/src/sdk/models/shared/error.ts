import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ErrorError extends SpeakeasyBase {
  @Metadata({ data: "json, name=details" })
  details?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class Error extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: ErrorError;
}
