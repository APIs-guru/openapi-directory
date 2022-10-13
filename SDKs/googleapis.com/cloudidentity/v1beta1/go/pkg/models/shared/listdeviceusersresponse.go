package shared

type ListDeviceUsersResponse struct {
	DeviceUsers   []DeviceUser `json:"deviceUsers"`
	NextPageToken *string      `json:"nextPageToken"`
}
