import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigManagementGatekeeperDeploymentState } from "./configmanagementgatekeeperdeploymentstate";
import { ConfigManagementPolicyControllerVersion } from "./configmanagementpolicycontrollerversion";


// ConfigManagementPolicyControllerState
/** 
 * State for PolicyControllerState.
**/
export class ConfigManagementPolicyControllerState extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentState" })
  deploymentState?: ConfigManagementGatekeeperDeploymentState;

  @Metadata({ data: "json, name=version" })
  version?: ConfigManagementPolicyControllerVersion;
}
