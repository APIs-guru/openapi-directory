package shared

type ExternalProtectionLevelOptions struct {
	EkmConnectionKeyPath *string `json:"ekmConnectionKeyPath"`
	ExternalKeyURI       *string `json:"externalKeyUri"`
}
