package shared

// GoogleCloudDialogflowCxV3beta1ListSecuritySettingsResponse
// The response message for SecuritySettings.ListSecuritySettings.
type GoogleCloudDialogflowCxV3beta1ListSecuritySettingsResponse struct {
	NextPageToken    *string                                          `json:"nextPageToken,omitempty"`
	SecuritySettings []GoogleCloudDialogflowCxV3beta1SecuritySettings `json:"securitySettings,omitempty"`
}
