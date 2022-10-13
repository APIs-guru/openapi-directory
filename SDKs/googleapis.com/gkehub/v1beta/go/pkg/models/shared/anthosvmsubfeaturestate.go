package shared

type AnthosVMSubFeatureStateInstallationStateEnum string

const (
	AnthosVMSubFeatureStateInstallationStateEnumInstallationStateUnspecified  AnthosVMSubFeatureStateInstallationStateEnum = "INSTALLATION_STATE_UNSPECIFIED"
	AnthosVMSubFeatureStateInstallationStateEnumInstallationStateNotInstalled AnthosVMSubFeatureStateInstallationStateEnum = "INSTALLATION_STATE_NOT_INSTALLED"
	AnthosVMSubFeatureStateInstallationStateEnumInstallationStateInstalled    AnthosVMSubFeatureStateInstallationStateEnum = "INSTALLATION_STATE_INSTALLED"
	AnthosVMSubFeatureStateInstallationStateEnumInstallationStateFailed       AnthosVMSubFeatureStateInstallationStateEnum = "INSTALLATION_STATE_FAILED"
)

type AnthosVMSubFeatureState struct {
	Description       *string                                       `json:"description"`
	InstallationState *AnthosVMSubFeatureStateInstallationStateEnum `json:"installationState"`
	MigrateState      map[string]interface{}                        `json:"migrateState"`
	ServiceMeshState  map[string]interface{}                        `json:"serviceMeshState"`
}
