import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2ValidationError } from "./googleclouddialogflowv2validationerror";


// GoogleCloudDialogflowV2ValidationResult
/** 
 * Represents the output of agent validation.
**/
export class GoogleCloudDialogflowV2ValidationResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=validationErrors", elemType: shared.GoogleCloudDialogflowV2ValidationError })
  validationErrors?: GoogleCloudDialogflowV2ValidationError[];
}
