import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ConfigManagementConfigSyncDeploymentStateAdmissionWebhookEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    NotInstalled = "NOT_INSTALLED",
    Installed = "INSTALLED",
    Error = "ERROR"
}
export declare enum ConfigManagementConfigSyncDeploymentStateGitSyncEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    NotInstalled = "NOT_INSTALLED",
    Installed = "INSTALLED",
    Error = "ERROR"
}
export declare enum ConfigManagementConfigSyncDeploymentStateImporterEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    NotInstalled = "NOT_INSTALLED",
    Installed = "INSTALLED",
    Error = "ERROR"
}
export declare enum ConfigManagementConfigSyncDeploymentStateMonitorEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    NotInstalled = "NOT_INSTALLED",
    Installed = "INSTALLED",
    Error = "ERROR"
}
export declare enum ConfigManagementConfigSyncDeploymentStateReconcilerManagerEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    NotInstalled = "NOT_INSTALLED",
    Installed = "INSTALLED",
    Error = "ERROR"
}
export declare enum ConfigManagementConfigSyncDeploymentStateRootReconcilerEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    NotInstalled = "NOT_INSTALLED",
    Installed = "INSTALLED",
    Error = "ERROR"
}
export declare enum ConfigManagementConfigSyncDeploymentStateSyncerEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    NotInstalled = "NOT_INSTALLED",
    Installed = "INSTALLED",
    Error = "ERROR"
}
/**
 * The state of ConfigSync's deployment on a cluster
**/
export declare class ConfigManagementConfigSyncDeploymentState extends SpeakeasyBase {
    admissionWebhook?: ConfigManagementConfigSyncDeploymentStateAdmissionWebhookEnum;
    gitSync?: ConfigManagementConfigSyncDeploymentStateGitSyncEnum;
    importer?: ConfigManagementConfigSyncDeploymentStateImporterEnum;
    monitor?: ConfigManagementConfigSyncDeploymentStateMonitorEnum;
    reconcilerManager?: ConfigManagementConfigSyncDeploymentStateReconcilerManagerEnum;
    rootReconciler?: ConfigManagementConfigSyncDeploymentStateRootReconcilerEnum;
    syncer?: ConfigManagementConfigSyncDeploymentStateSyncerEnum;
}
