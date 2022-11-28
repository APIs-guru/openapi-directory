package shared

// ListDevicesResponse
// Response for `ListDevices`.
type ListDevicesResponse struct {
	Devices       []Device `json:"devices,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
}
