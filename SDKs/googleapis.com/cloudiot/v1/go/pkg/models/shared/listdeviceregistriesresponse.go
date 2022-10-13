package shared

type ListDeviceRegistriesResponse struct {
	DeviceRegistries []DeviceRegistry `json:"deviceRegistries"`
	NextPageToken    *string          `json:"nextPageToken"`
}
