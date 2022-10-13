package shared

type ListMonitoredResourceDescriptorsResponse struct {
	NextPageToken       *string                       `json:"nextPageToken"`
	ResourceDescriptors []MonitoredResourceDescriptor `json:"resourceDescriptors"`
}
