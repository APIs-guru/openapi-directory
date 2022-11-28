import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigManagementGatekeeperDeploymentState } from "./configmanagementgatekeeperdeploymentstate";
import { ConfigManagementPolicyControllerVersion } from "./configmanagementpolicycontrollerversion";
/**
 * State for PolicyControllerState.
**/
export declare class ConfigManagementPolicyControllerState extends SpeakeasyBase {
    deploymentState?: ConfigManagementGatekeeperDeploymentState;
    version?: ConfigManagementPolicyControllerVersion;
}
