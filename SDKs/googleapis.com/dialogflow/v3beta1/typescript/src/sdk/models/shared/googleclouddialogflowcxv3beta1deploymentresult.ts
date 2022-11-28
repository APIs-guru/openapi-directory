import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3beta1DeploymentResult
/** 
 * Result of the deployment.
**/
export class GoogleCloudDialogflowCxV3beta1DeploymentResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentTestResults" })
  deploymentTestResults?: string[];

  @SpeakeasyMetadata({ data: "json, name=experiment" })
  experiment?: string;
}
