package shared




type LocalControllerStateInstallationStateEnum string

const (
    LocalControllerStateInstallationStateEnumInstallationStateUnspecified LocalControllerStateInstallationStateEnum = "INSTALLATION_STATE_UNSPECIFIED"
LocalControllerStateInstallationStateEnumInstallationStateNotInstalled LocalControllerStateInstallationStateEnum = "INSTALLATION_STATE_NOT_INSTALLED"
LocalControllerStateInstallationStateEnumInstallationStateInstalled LocalControllerStateInstallationStateEnum = "INSTALLATION_STATE_INSTALLED"
LocalControllerStateInstallationStateEnumInstallationStateFailed LocalControllerStateInstallationStateEnum = "INSTALLATION_STATE_FAILED"
)


type LocalControllerState struct {
    Description *string `json:"description,omitempty"`
    InstallationState *LocalControllerStateInstallationStateEnum `json:"installationState,omitempty"`
    
}

