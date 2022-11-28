import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3ValidationMessage } from "./googleclouddialogflowcxv3validationmessage";
/**
 * The response message for Flows.GetFlowValidationResult.
**/
export declare class GoogleCloudDialogflowCxV3FlowValidationResult extends SpeakeasyBase {
    name?: string;
    updateTime?: string;
    validationMessages?: GoogleCloudDialogflowCxV3ValidationMessage[];
}
