package shared

// ListMonitoredResourceDescriptorsResponse
// Result returned from ListMonitoredResourceDescriptors.
type ListMonitoredResourceDescriptorsResponse struct {
	NextPageToken       *string                       `json:"nextPageToken,omitempty"`
	ResourceDescriptors []MonitoredResourceDescriptor `json:"resourceDescriptors,omitempty"`
}
