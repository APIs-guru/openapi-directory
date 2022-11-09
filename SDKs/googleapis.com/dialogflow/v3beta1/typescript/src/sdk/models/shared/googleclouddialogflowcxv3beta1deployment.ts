import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowCxV3beta1DeploymentResult } from "./googleclouddialogflowcxv3beta1deploymentresult";

export enum GoogleCloudDialogflowCxV3beta1DeploymentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Running = "RUNNING"
,    Succeeded = "SUCCEEDED"
,    Failed = "FAILED"
}


// GoogleCloudDialogflowCxV3beta1Deployment
/** 
 * Represents an deployment in an environment. A deployment happens when a flow version configured to be active in the environment. You can configure running pre-deployment steps, e.g. running validation test cases, experiment auto-rollout, etc.
**/
export class GoogleCloudDialogflowCxV3beta1Deployment extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=flowVersion" })
  flowVersion?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=result" })
  result?: GoogleCloudDialogflowCxV3beta1DeploymentResult;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudDialogflowCxV3beta1DeploymentStateEnum;
}
