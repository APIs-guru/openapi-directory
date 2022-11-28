import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3DeploymentResult } from "./googleclouddialogflowcxv3deploymentresult";


export enum GoogleCloudDialogflowCxV3DeploymentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}


// GoogleCloudDialogflowCxV3Deployment
/** 
 * Represents an deployment in an environment. A deployment happens when a flow version configured to be active in the environment. You can configure running pre-deployment steps, e.g. running validation test cases, experiment auto-rollout, etc.
**/
export class GoogleCloudDialogflowCxV3Deployment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=flowVersion" })
  flowVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: GoogleCloudDialogflowCxV3DeploymentResult;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudDialogflowCxV3DeploymentStateEnum;
}
