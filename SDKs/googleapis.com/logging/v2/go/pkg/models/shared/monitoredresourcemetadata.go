package shared

type MonitoredResourceMetadata struct {
	SystemLabels map[string]interface{} `json:"systemLabels,omitempty"`
	UserLabels   map[string]string      `json:"userLabels,omitempty"`
}
