import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ConfigManagementHierarchyControllerDeploymentStateExtensionEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    NotInstalled = "NOT_INSTALLED",
    Installed = "INSTALLED",
    Error = "ERROR"
}
export declare enum ConfigManagementHierarchyControllerDeploymentStateHncEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    NotInstalled = "NOT_INSTALLED",
    Installed = "INSTALLED",
    Error = "ERROR"
}
/**
 * Deployment state for Hierarchy Controller
**/
export declare class ConfigManagementHierarchyControllerDeploymentState extends SpeakeasyBase {
    extension?: ConfigManagementHierarchyControllerDeploymentStateExtensionEnum;
    hnc?: ConfigManagementHierarchyControllerDeploymentStateHncEnum;
}
