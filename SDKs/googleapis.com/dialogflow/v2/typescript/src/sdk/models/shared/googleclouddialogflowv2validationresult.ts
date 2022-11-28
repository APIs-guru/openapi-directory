import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2ValidationError } from "./googleclouddialogflowv2validationerror";



// GoogleCloudDialogflowV2ValidationResult
/** 
 * Represents the output of agent validation.
**/
export class GoogleCloudDialogflowV2ValidationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=validationErrors", elemType: GoogleCloudDialogflowV2ValidationError })
  validationErrors?: GoogleCloudDialogflowV2ValidationError[];
}
