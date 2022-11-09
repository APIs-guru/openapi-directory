import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigManagementInstallError } from "./configmanagementinstallerror";
export declare enum ConfigManagementOperatorStateDeploymentStateEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    NotInstalled = "NOT_INSTALLED",
    Installed = "INSTALLED",
    Error = "ERROR"
}
/**
 * State information for an ACM's Operator
**/
export declare class ConfigManagementOperatorState extends SpeakeasyBase {
    deploymentState?: ConfigManagementOperatorStateDeploymentStateEnum;
    errors?: ConfigManagementInstallError[];
    version?: string;
}
