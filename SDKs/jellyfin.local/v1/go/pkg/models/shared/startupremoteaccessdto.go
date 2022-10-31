package shared

type StartupRemoteAccessDto struct {
	EnableAutomaticPortMapping bool `json:"EnableAutomaticPortMapping"`
	EnableRemoteAccess         bool `json:"EnableRemoteAccess"`
}
