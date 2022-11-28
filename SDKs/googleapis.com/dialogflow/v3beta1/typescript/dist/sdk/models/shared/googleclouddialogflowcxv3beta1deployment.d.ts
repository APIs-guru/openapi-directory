import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1DeploymentResult } from "./googleclouddialogflowcxv3beta1deploymentresult";
export declare enum GoogleCloudDialogflowCxV3beta1DeploymentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}
/**
 * Represents an deployment in an environment. A deployment happens when a flow version configured to be active in the environment. You can configure running pre-deployment steps, e.g. running validation test cases, experiment auto-rollout, etc.
**/
export declare class GoogleCloudDialogflowCxV3beta1Deployment extends SpeakeasyBase {
    endTime?: string;
    flowVersion?: string;
    name?: string;
    result?: GoogleCloudDialogflowCxV3beta1DeploymentResult;
    startTime?: string;
    state?: GoogleCloudDialogflowCxV3beta1DeploymentStateEnum;
}
