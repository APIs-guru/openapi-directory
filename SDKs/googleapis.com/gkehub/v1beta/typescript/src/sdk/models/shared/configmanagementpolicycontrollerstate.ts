import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigManagementGatekeeperDeploymentState } from "./configmanagementgatekeeperdeploymentstate";
import { ConfigManagementPolicyControllerVersion } from "./configmanagementpolicycontrollerversion";



// ConfigManagementPolicyControllerState
/** 
 * State for PolicyControllerState.
**/
export class ConfigManagementPolicyControllerState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentState" })
  deploymentState?: ConfigManagementGatekeeperDeploymentState;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: ConfigManagementPolicyControllerVersion;
}
