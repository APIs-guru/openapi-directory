import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ErrorError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class Error extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: ErrorError;
}
