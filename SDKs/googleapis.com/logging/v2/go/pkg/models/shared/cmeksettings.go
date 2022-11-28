package shared

// CmekSettingsInput
// Describes the customer-managed encryption key (CMEK) settings associated with a project, folder, organization, billing account, or flexible resource.Note: CMEK for the Log Router can currently only be configured for Google Cloud organizations. Once configured, it applies to all projects and folders in the Google Cloud organization.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.
type CmekSettingsInput struct {
	KmsKeyName        *string `json:"kmsKeyName,omitempty"`
	KmsKeyVersionName *string `json:"kmsKeyVersionName,omitempty"`
}

// CmekSettings
// Describes the customer-managed encryption key (CMEK) settings associated with a project, folder, organization, billing account, or flexible resource.Note: CMEK for the Log Router can currently only be configured for Google Cloud organizations. Once configured, it applies to all projects and folders in the Google Cloud organization.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.
type CmekSettings struct {
	KmsKeyName        *string `json:"kmsKeyName,omitempty"`
	KmsKeyVersionName *string `json:"kmsKeyVersionName,omitempty"`
	Name              *string `json:"name,omitempty"`
	ServiceAccountID  *string `json:"serviceAccountId,omitempty"`
}
