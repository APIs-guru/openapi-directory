package shared

type GoogleCloudDialogflowCxV3ListSecuritySettingsResponse struct {
	NextPageToken    *string                                     `json:"nextPageToken"`
	SecuritySettings []GoogleCloudDialogflowCxV3SecuritySettings `json:"securitySettings"`
}
