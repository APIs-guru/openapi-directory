import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationValidationError } from "./applicationvalidationerror";



export class ApplicationValidationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=validation_errors", elemType: ApplicationValidationError })
  validationErrors: ApplicationValidationError[];
}
