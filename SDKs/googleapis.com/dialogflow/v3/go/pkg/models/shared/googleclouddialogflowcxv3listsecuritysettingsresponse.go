package shared

// GoogleCloudDialogflowCxV3ListSecuritySettingsResponse
// The response message for SecuritySettings.ListSecuritySettings.
type GoogleCloudDialogflowCxV3ListSecuritySettingsResponse struct {
	NextPageToken    *string                                     `json:"nextPageToken,omitempty"`
	SecuritySettings []GoogleCloudDialogflowCxV3SecuritySettings `json:"securitySettings,omitempty"`
}
