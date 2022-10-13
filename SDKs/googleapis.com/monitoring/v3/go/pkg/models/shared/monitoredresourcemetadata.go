package shared

type MonitoredResourceMetadata struct {
	SystemLabels map[string]interface{} `json:"systemLabels"`
	UserLabels   map[string]string      `json:"userLabels"`
}
