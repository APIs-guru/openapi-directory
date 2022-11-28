import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeploymentConfig } from "./deploymentconfig";



// UpdateDeploymentRequest
/** 
 * Request with deployment information to update an existing deployment.
**/
export class UpdateDeploymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentConfig" })
  deploymentConfig?: DeploymentConfig;
}
