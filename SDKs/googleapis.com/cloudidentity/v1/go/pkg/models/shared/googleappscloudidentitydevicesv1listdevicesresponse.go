package shared

type GoogleAppsCloudidentityDevicesV1ListDevicesResponse struct {
	Devices       []GoogleAppsCloudidentityDevicesV1Device `json:"devices,omitempty"`
	NextPageToken *string                                  `json:"nextPageToken,omitempty"`
}
