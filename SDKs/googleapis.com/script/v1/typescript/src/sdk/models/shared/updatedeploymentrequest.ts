import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeploymentConfig } from "./deploymentconfig";


// UpdateDeploymentRequest
/** 
 * Request with deployment information to update an existing deployment.
**/
export class UpdateDeploymentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentConfig" })
  deploymentConfig?: DeploymentConfig;
}
