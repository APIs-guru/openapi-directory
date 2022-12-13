import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApplicationValidationError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error_location" })
  errorLocation?: string;

  @SpeakeasyMetadata({ data: "json, name=error_message" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=error_type" })
  errorType?: string;
}
