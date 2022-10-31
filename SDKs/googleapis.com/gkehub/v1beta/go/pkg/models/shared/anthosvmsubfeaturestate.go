package shared




type AnthosVMSubFeatureStateInstallationStateEnum string

const (
    AnthosVMSubFeatureStateInstallationStateEnumInstallationStateUnspecified AnthosVMSubFeatureStateInstallationStateEnum = "INSTALLATION_STATE_UNSPECIFIED"
AnthosVMSubFeatureStateInstallationStateEnumInstallationStateNotInstalled AnthosVMSubFeatureStateInstallationStateEnum = "INSTALLATION_STATE_NOT_INSTALLED"
AnthosVMSubFeatureStateInstallationStateEnumInstallationStateInstalled AnthosVMSubFeatureStateInstallationStateEnum = "INSTALLATION_STATE_INSTALLED"
AnthosVMSubFeatureStateInstallationStateEnumInstallationStateFailed AnthosVMSubFeatureStateInstallationStateEnum = "INSTALLATION_STATE_FAILED"
)


type AnthosVMSubFeatureState struct {
    Description *string `json:"description,omitempty"`
    InstallationState *AnthosVMSubFeatureStateInstallationStateEnum `json:"installationState,omitempty"`
    MigrateState map[string]interface{} `json:"migrateState,omitempty"`
    ServiceMeshState map[string]interface{} `json:"serviceMeshState,omitempty"`
    
}

