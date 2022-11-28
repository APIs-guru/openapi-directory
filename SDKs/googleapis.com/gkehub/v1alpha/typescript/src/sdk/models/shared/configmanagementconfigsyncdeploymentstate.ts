import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ConfigManagementConfigSyncDeploymentStateAdmissionWebhookEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    NotInstalled = "NOT_INSTALLED",
    Installed = "INSTALLED",
    Error = "ERROR"
}

export enum ConfigManagementConfigSyncDeploymentStateGitSyncEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    NotInstalled = "NOT_INSTALLED",
    Installed = "INSTALLED",
    Error = "ERROR"
}

export enum ConfigManagementConfigSyncDeploymentStateImporterEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    NotInstalled = "NOT_INSTALLED",
    Installed = "INSTALLED",
    Error = "ERROR"
}

export enum ConfigManagementConfigSyncDeploymentStateMonitorEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    NotInstalled = "NOT_INSTALLED",
    Installed = "INSTALLED",
    Error = "ERROR"
}

export enum ConfigManagementConfigSyncDeploymentStateReconcilerManagerEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    NotInstalled = "NOT_INSTALLED",
    Installed = "INSTALLED",
    Error = "ERROR"
}

export enum ConfigManagementConfigSyncDeploymentStateRootReconcilerEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    NotInstalled = "NOT_INSTALLED",
    Installed = "INSTALLED",
    Error = "ERROR"
}

export enum ConfigManagementConfigSyncDeploymentStateSyncerEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    NotInstalled = "NOT_INSTALLED",
    Installed = "INSTALLED",
    Error = "ERROR"
}


// ConfigManagementConfigSyncDeploymentState
/** 
 * The state of ConfigSync's deployment on a cluster
**/
export class ConfigManagementConfigSyncDeploymentState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=admissionWebhook" })
  admissionWebhook?: ConfigManagementConfigSyncDeploymentStateAdmissionWebhookEnum;

  @SpeakeasyMetadata({ data: "json, name=gitSync" })
  gitSync?: ConfigManagementConfigSyncDeploymentStateGitSyncEnum;

  @SpeakeasyMetadata({ data: "json, name=importer" })
  importer?: ConfigManagementConfigSyncDeploymentStateImporterEnum;

  @SpeakeasyMetadata({ data: "json, name=monitor" })
  monitor?: ConfigManagementConfigSyncDeploymentStateMonitorEnum;

  @SpeakeasyMetadata({ data: "json, name=reconcilerManager" })
  reconcilerManager?: ConfigManagementConfigSyncDeploymentStateReconcilerManagerEnum;

  @SpeakeasyMetadata({ data: "json, name=rootReconciler" })
  rootReconciler?: ConfigManagementConfigSyncDeploymentStateRootReconcilerEnum;

  @SpeakeasyMetadata({ data: "json, name=syncer" })
  syncer?: ConfigManagementConfigSyncDeploymentStateSyncerEnum;
}
