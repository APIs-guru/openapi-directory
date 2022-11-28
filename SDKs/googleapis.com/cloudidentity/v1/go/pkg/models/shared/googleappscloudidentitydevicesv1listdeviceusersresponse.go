package shared

// GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse
// Response message that is returned from the ListDeviceUsers method.
type GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse struct {
	DeviceUsers   []GoogleAppsCloudidentityDevicesV1DeviceUser `json:"deviceUsers,omitempty"`
	NextPageToken *string                                      `json:"nextPageToken,omitempty"`
}
