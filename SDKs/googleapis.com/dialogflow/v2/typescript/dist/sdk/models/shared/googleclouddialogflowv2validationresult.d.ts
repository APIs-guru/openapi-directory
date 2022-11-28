import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2ValidationError } from "./googleclouddialogflowv2validationerror";
/**
 * Represents the output of agent validation.
**/
export declare class GoogleCloudDialogflowV2ValidationResult extends SpeakeasyBase {
    validationErrors?: GoogleCloudDialogflowV2ValidationError[];
}
