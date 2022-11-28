package shared

// GoogleAppsCloudidentityDevicesV1ListDevicesResponse
// Response message that is returned from the ListDevices method.
type GoogleAppsCloudidentityDevicesV1ListDevicesResponse struct {
	Devices       []GoogleAppsCloudidentityDevicesV1Device `json:"devices,omitempty"`
	NextPageToken *string                                  `json:"nextPageToken,omitempty"`
}
