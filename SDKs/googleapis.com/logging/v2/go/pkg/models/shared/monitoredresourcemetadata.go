package shared

// MonitoredResourceMetadata
// Auxiliary metadata for a MonitoredResource object. MonitoredResource objects contain the minimum set of information to uniquely identify a monitored resource instance. There is some other useful auxiliary metadata. Monitoring and Logging use an ingestion pipeline to extract metadata for cloud resources of all types, and store the metadata in this message.
type MonitoredResourceMetadata struct {
	SystemLabels map[string]interface{} `json:"systemLabels,omitempty"`
	UserLabels   map[string]string      `json:"userLabels,omitempty"`
}
