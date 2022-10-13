package shared

type GoogleCloudResourcesettingsV1ListSettingsResponse struct {
	NextPageToken *string                                `json:"nextPageToken"`
	Settings      []GoogleCloudResourcesettingsV1Setting `json:"settings"`
}
