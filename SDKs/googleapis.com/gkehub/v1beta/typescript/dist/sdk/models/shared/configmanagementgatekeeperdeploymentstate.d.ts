import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ConfigManagementGatekeeperDeploymentStateGatekeeperAuditEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    NotInstalled = "NOT_INSTALLED",
    Installed = "INSTALLED",
    Error = "ERROR"
}
export declare enum ConfigManagementGatekeeperDeploymentStateGatekeeperControllerManagerStateEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    NotInstalled = "NOT_INSTALLED",
    Installed = "INSTALLED",
    Error = "ERROR"
}
export declare enum ConfigManagementGatekeeperDeploymentStateGatekeeperMutationEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    NotInstalled = "NOT_INSTALLED",
    Installed = "INSTALLED",
    Error = "ERROR"
}
/**
 * State of Policy Controller installation.
**/
export declare class ConfigManagementGatekeeperDeploymentState extends SpeakeasyBase {
    gatekeeperAudit?: ConfigManagementGatekeeperDeploymentStateGatekeeperAuditEnum;
    gatekeeperControllerManagerState?: ConfigManagementGatekeeperDeploymentStateGatekeeperControllerManagerStateEnum;
    gatekeeperMutation?: ConfigManagementGatekeeperDeploymentStateGatekeeperMutationEnum;
}
