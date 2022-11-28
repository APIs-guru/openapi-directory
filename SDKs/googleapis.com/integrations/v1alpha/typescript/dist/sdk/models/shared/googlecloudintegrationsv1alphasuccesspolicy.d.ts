import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudIntegrationsV1alphaSuccessPolicyFinalStateEnum {
    FinalStateUnspecified = "FINAL_STATE_UNSPECIFIED",
    Succeeded = "SUCCEEDED",
    Suspended = "SUSPENDED"
}
/**
 * Policy that dictates the behavior for the task after it completes successfully.
**/
export declare class GoogleCloudIntegrationsV1alphaSuccessPolicy extends SpeakeasyBase {
    finalState?: GoogleCloudIntegrationsV1alphaSuccessPolicyFinalStateEnum;
}
