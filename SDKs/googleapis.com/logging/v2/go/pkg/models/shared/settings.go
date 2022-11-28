package shared

// Settings
// Describes the settings associated with a project, folder, organization, billing account, or flexible resource.
type Settings struct {
	DisableDefaultSink  *bool   `json:"disableDefaultSink,omitempty"`
	KmsKeyName          *string `json:"kmsKeyName,omitempty"`
	KmsServiceAccountID *string `json:"kmsServiceAccountId,omitempty"`
	Name                *string `json:"name,omitempty"`
	StorageLocation     *string `json:"storageLocation,omitempty"`
}

// SettingsInput
// Describes the settings associated with a project, folder, organization, billing account, or flexible resource.
type SettingsInput struct {
	DisableDefaultSink *bool   `json:"disableDefaultSink,omitempty"`
	KmsKeyName         *string `json:"kmsKeyName,omitempty"`
	StorageLocation    *string `json:"storageLocation,omitempty"`
}
