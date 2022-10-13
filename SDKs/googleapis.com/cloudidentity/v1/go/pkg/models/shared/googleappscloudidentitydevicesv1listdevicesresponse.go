package shared

type GoogleAppsCloudidentityDevicesV1ListDevicesResponse struct {
	Devices       []GoogleAppsCloudidentityDevicesV1Device `json:"devices"`
	NextPageToken *string                                  `json:"nextPageToken"`
}
