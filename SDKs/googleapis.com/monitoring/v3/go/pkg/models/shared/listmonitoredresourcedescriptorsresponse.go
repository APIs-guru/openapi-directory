package shared

// ListMonitoredResourceDescriptorsResponse
// The ListMonitoredResourceDescriptors response.
type ListMonitoredResourceDescriptorsResponse struct {
	NextPageToken       *string                       `json:"nextPageToken,omitempty"`
	ResourceDescriptors []MonitoredResourceDescriptor `json:"resourceDescriptors,omitempty"`
}
