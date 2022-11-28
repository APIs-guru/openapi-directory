package shared

// GoogleCloudResourcesettingsV1ListSettingsResponse
// The response from ListSettings.
type GoogleCloudResourcesettingsV1ListSettingsResponse struct {
	NextPageToken *string                                `json:"nextPageToken,omitempty"`
	Settings      []GoogleCloudResourcesettingsV1Setting `json:"settings,omitempty"`
}
