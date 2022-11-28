import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1ValidationError } from "./googleclouddialogflowv2beta1validationerror";



// GoogleCloudDialogflowV2beta1ValidationResult
/** 
 * Represents the output of agent validation.
**/
export class GoogleCloudDialogflowV2beta1ValidationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=validationErrors", elemType: GoogleCloudDialogflowV2beta1ValidationError })
  validationErrors?: GoogleCloudDialogflowV2beta1ValidationError[];
}
