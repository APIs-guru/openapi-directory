package shared

type ConfigManagementConfigSyncDeploymentStateAdmissionWebhookEnum string

const (
	ConfigManagementConfigSyncDeploymentStateAdmissionWebhookEnumDeploymentStateUnspecified ConfigManagementConfigSyncDeploymentStateAdmissionWebhookEnum = "DEPLOYMENT_STATE_UNSPECIFIED"
	ConfigManagementConfigSyncDeploymentStateAdmissionWebhookEnumNotInstalled               ConfigManagementConfigSyncDeploymentStateAdmissionWebhookEnum = "NOT_INSTALLED"
	ConfigManagementConfigSyncDeploymentStateAdmissionWebhookEnumInstalled                  ConfigManagementConfigSyncDeploymentStateAdmissionWebhookEnum = "INSTALLED"
	ConfigManagementConfigSyncDeploymentStateAdmissionWebhookEnumError                      ConfigManagementConfigSyncDeploymentStateAdmissionWebhookEnum = "ERROR"
)

type ConfigManagementConfigSyncDeploymentStateGitSyncEnum string

const (
	ConfigManagementConfigSyncDeploymentStateGitSyncEnumDeploymentStateUnspecified ConfigManagementConfigSyncDeploymentStateGitSyncEnum = "DEPLOYMENT_STATE_UNSPECIFIED"
	ConfigManagementConfigSyncDeploymentStateGitSyncEnumNotInstalled               ConfigManagementConfigSyncDeploymentStateGitSyncEnum = "NOT_INSTALLED"
	ConfigManagementConfigSyncDeploymentStateGitSyncEnumInstalled                  ConfigManagementConfigSyncDeploymentStateGitSyncEnum = "INSTALLED"
	ConfigManagementConfigSyncDeploymentStateGitSyncEnumError                      ConfigManagementConfigSyncDeploymentStateGitSyncEnum = "ERROR"
)

type ConfigManagementConfigSyncDeploymentStateImporterEnum string

const (
	ConfigManagementConfigSyncDeploymentStateImporterEnumDeploymentStateUnspecified ConfigManagementConfigSyncDeploymentStateImporterEnum = "DEPLOYMENT_STATE_UNSPECIFIED"
	ConfigManagementConfigSyncDeploymentStateImporterEnumNotInstalled               ConfigManagementConfigSyncDeploymentStateImporterEnum = "NOT_INSTALLED"
	ConfigManagementConfigSyncDeploymentStateImporterEnumInstalled                  ConfigManagementConfigSyncDeploymentStateImporterEnum = "INSTALLED"
	ConfigManagementConfigSyncDeploymentStateImporterEnumError                      ConfigManagementConfigSyncDeploymentStateImporterEnum = "ERROR"
)

type ConfigManagementConfigSyncDeploymentStateMonitorEnum string

const (
	ConfigManagementConfigSyncDeploymentStateMonitorEnumDeploymentStateUnspecified ConfigManagementConfigSyncDeploymentStateMonitorEnum = "DEPLOYMENT_STATE_UNSPECIFIED"
	ConfigManagementConfigSyncDeploymentStateMonitorEnumNotInstalled               ConfigManagementConfigSyncDeploymentStateMonitorEnum = "NOT_INSTALLED"
	ConfigManagementConfigSyncDeploymentStateMonitorEnumInstalled                  ConfigManagementConfigSyncDeploymentStateMonitorEnum = "INSTALLED"
	ConfigManagementConfigSyncDeploymentStateMonitorEnumError                      ConfigManagementConfigSyncDeploymentStateMonitorEnum = "ERROR"
)

type ConfigManagementConfigSyncDeploymentStateReconcilerManagerEnum string

const (
	ConfigManagementConfigSyncDeploymentStateReconcilerManagerEnumDeploymentStateUnspecified ConfigManagementConfigSyncDeploymentStateReconcilerManagerEnum = "DEPLOYMENT_STATE_UNSPECIFIED"
	ConfigManagementConfigSyncDeploymentStateReconcilerManagerEnumNotInstalled               ConfigManagementConfigSyncDeploymentStateReconcilerManagerEnum = "NOT_INSTALLED"
	ConfigManagementConfigSyncDeploymentStateReconcilerManagerEnumInstalled                  ConfigManagementConfigSyncDeploymentStateReconcilerManagerEnum = "INSTALLED"
	ConfigManagementConfigSyncDeploymentStateReconcilerManagerEnumError                      ConfigManagementConfigSyncDeploymentStateReconcilerManagerEnum = "ERROR"
)

type ConfigManagementConfigSyncDeploymentStateRootReconcilerEnum string

const (
	ConfigManagementConfigSyncDeploymentStateRootReconcilerEnumDeploymentStateUnspecified ConfigManagementConfigSyncDeploymentStateRootReconcilerEnum = "DEPLOYMENT_STATE_UNSPECIFIED"
	ConfigManagementConfigSyncDeploymentStateRootReconcilerEnumNotInstalled               ConfigManagementConfigSyncDeploymentStateRootReconcilerEnum = "NOT_INSTALLED"
	ConfigManagementConfigSyncDeploymentStateRootReconcilerEnumInstalled                  ConfigManagementConfigSyncDeploymentStateRootReconcilerEnum = "INSTALLED"
	ConfigManagementConfigSyncDeploymentStateRootReconcilerEnumError                      ConfigManagementConfigSyncDeploymentStateRootReconcilerEnum = "ERROR"
)

type ConfigManagementConfigSyncDeploymentStateSyncerEnum string

const (
	ConfigManagementConfigSyncDeploymentStateSyncerEnumDeploymentStateUnspecified ConfigManagementConfigSyncDeploymentStateSyncerEnum = "DEPLOYMENT_STATE_UNSPECIFIED"
	ConfigManagementConfigSyncDeploymentStateSyncerEnumNotInstalled               ConfigManagementConfigSyncDeploymentStateSyncerEnum = "NOT_INSTALLED"
	ConfigManagementConfigSyncDeploymentStateSyncerEnumInstalled                  ConfigManagementConfigSyncDeploymentStateSyncerEnum = "INSTALLED"
	ConfigManagementConfigSyncDeploymentStateSyncerEnumError                      ConfigManagementConfigSyncDeploymentStateSyncerEnum = "ERROR"
)

type ConfigManagementConfigSyncDeploymentState struct {
	AdmissionWebhook  *ConfigManagementConfigSyncDeploymentStateAdmissionWebhookEnum  `json:"admissionWebhook,omitempty"`
	GitSync           *ConfigManagementConfigSyncDeploymentStateGitSyncEnum           `json:"gitSync,omitempty"`
	Importer          *ConfigManagementConfigSyncDeploymentStateImporterEnum          `json:"importer,omitempty"`
	Monitor           *ConfigManagementConfigSyncDeploymentStateMonitorEnum           `json:"monitor,omitempty"`
	ReconcilerManager *ConfigManagementConfigSyncDeploymentStateReconcilerManagerEnum `json:"reconcilerManager,omitempty"`
	RootReconciler    *ConfigManagementConfigSyncDeploymentStateRootReconcilerEnum    `json:"rootReconciler,omitempty"`
	Syncer            *ConfigManagementConfigSyncDeploymentStateSyncerEnum            `json:"syncer,omitempty"`
}
