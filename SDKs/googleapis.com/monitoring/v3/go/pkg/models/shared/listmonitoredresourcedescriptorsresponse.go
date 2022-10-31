package shared



type ListMonitoredResourceDescriptorsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    ResourceDescriptors []MonitoredResourceDescriptor `json:"resourceDescriptors,omitempty"`
    
}

