package shared

type ListDeviceUsersResponse struct {
	DeviceUsers   []DeviceUser `json:"deviceUsers,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
}
