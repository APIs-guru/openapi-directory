package shared



type ListDevicesResponse struct {
    Devices []Device `json:"devices,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

