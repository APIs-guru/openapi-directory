import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1ValidationMessage } from "./googleclouddialogflowcxv3beta1validationmessage";
/**
 * The response message for Flows.GetFlowValidationResult.
**/
export declare class GoogleCloudDialogflowCxV3beta1FlowValidationResult extends SpeakeasyBase {
    name?: string;
    updateTime?: string;
    validationMessages?: GoogleCloudDialogflowCxV3beta1ValidationMessage[];
}
