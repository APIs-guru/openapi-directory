package shared

type GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse struct {
	DeviceUsers   []GoogleAppsCloudidentityDevicesV1DeviceUser `json:"deviceUsers"`
	NextPageToken *string                                      `json:"nextPageToken"`
}
