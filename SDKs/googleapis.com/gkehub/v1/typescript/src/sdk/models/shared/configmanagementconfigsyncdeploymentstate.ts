import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ConfigManagementConfigSyncDeploymentStateAdmissionWebhookEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED"
,    NotInstalled = "NOT_INSTALLED"
,    Installed = "INSTALLED"
,    Error = "ERROR"
}

export enum ConfigManagementConfigSyncDeploymentStateGitSyncEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED"
,    NotInstalled = "NOT_INSTALLED"
,    Installed = "INSTALLED"
,    Error = "ERROR"
}

export enum ConfigManagementConfigSyncDeploymentStateImporterEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED"
,    NotInstalled = "NOT_INSTALLED"
,    Installed = "INSTALLED"
,    Error = "ERROR"
}

export enum ConfigManagementConfigSyncDeploymentStateMonitorEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED"
,    NotInstalled = "NOT_INSTALLED"
,    Installed = "INSTALLED"
,    Error = "ERROR"
}

export enum ConfigManagementConfigSyncDeploymentStateReconcilerManagerEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED"
,    NotInstalled = "NOT_INSTALLED"
,    Installed = "INSTALLED"
,    Error = "ERROR"
}

export enum ConfigManagementConfigSyncDeploymentStateRootReconcilerEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED"
,    NotInstalled = "NOT_INSTALLED"
,    Installed = "INSTALLED"
,    Error = "ERROR"
}

export enum ConfigManagementConfigSyncDeploymentStateSyncerEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED"
,    NotInstalled = "NOT_INSTALLED"
,    Installed = "INSTALLED"
,    Error = "ERROR"
}


// ConfigManagementConfigSyncDeploymentState
/** 
 * The state of ConfigSync's deployment on a cluster
**/
export class ConfigManagementConfigSyncDeploymentState extends SpeakeasyBase {
  @Metadata({ data: "json, name=admissionWebhook" })
  admissionWebhook?: ConfigManagementConfigSyncDeploymentStateAdmissionWebhookEnum;

  @Metadata({ data: "json, name=gitSync" })
  gitSync?: ConfigManagementConfigSyncDeploymentStateGitSyncEnum;

  @Metadata({ data: "json, name=importer" })
  importer?: ConfigManagementConfigSyncDeploymentStateImporterEnum;

  @Metadata({ data: "json, name=monitor" })
  monitor?: ConfigManagementConfigSyncDeploymentStateMonitorEnum;

  @Metadata({ data: "json, name=reconcilerManager" })
  reconcilerManager?: ConfigManagementConfigSyncDeploymentStateReconcilerManagerEnum;

  @Metadata({ data: "json, name=rootReconciler" })
  rootReconciler?: ConfigManagementConfigSyncDeploymentStateRootReconcilerEnum;

  @Metadata({ data: "json, name=syncer" })
  syncer?: ConfigManagementConfigSyncDeploymentStateSyncerEnum;
}
