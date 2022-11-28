package shared

// ListDeviceRegistriesResponse
// Response for `ListDeviceRegistries`.
type ListDeviceRegistriesResponse struct {
	DeviceRegistries []DeviceRegistry `json:"deviceRegistries,omitempty"`
	NextPageToken    *string          `json:"nextPageToken,omitempty"`
}
