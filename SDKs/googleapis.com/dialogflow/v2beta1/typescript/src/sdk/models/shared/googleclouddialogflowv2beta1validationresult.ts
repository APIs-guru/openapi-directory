import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1ValidationError } from "./googleclouddialogflowv2beta1validationerror";


// GoogleCloudDialogflowV2beta1ValidationResult
/** 
 * Represents the output of agent validation.
**/
export class GoogleCloudDialogflowV2beta1ValidationResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=validationErrors", elemType: shared.GoogleCloudDialogflowV2beta1ValidationError })
  validationErrors?: GoogleCloudDialogflowV2beta1ValidationError[];
}
