package shared

// ListDevicesResponse
// Response message that is returned from the ListDevices method.
type ListDevicesResponse struct {
	Devices       []Device `json:"devices,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
}
