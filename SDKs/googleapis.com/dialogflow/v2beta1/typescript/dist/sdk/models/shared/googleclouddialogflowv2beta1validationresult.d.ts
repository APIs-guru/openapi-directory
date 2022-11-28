import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1ValidationError } from "./googleclouddialogflowv2beta1validationerror";
/**
 * Represents the output of agent validation.
**/
export declare class GoogleCloudDialogflowV2beta1ValidationResult extends SpeakeasyBase {
    validationErrors?: GoogleCloudDialogflowV2beta1ValidationError[];
}
