package shared

// ListDeviceUsersResponse
// Response message that is returned from the ListDeviceUsers method.
type ListDeviceUsersResponse struct {
	DeviceUsers   []DeviceUser `json:"deviceUsers,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
}
