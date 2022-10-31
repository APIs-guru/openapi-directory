package shared



type ListDeviceRegistriesResponse struct {
    DeviceRegistries []DeviceRegistry `json:"deviceRegistries,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

