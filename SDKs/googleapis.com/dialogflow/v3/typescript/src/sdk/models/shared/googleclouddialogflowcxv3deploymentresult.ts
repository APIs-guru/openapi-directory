import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowCxV3DeploymentResult
/** 
 * Result of the deployment.
**/
export class GoogleCloudDialogflowCxV3DeploymentResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentTestResults" })
  deploymentTestResults?: string[];

  @Metadata({ data: "json, name=experiment" })
  experiment?: string;
}
