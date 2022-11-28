package shared

// LogsPanel
// A widget that displays a stream of log.
type LogsPanel struct {
	Filter        *string  `json:"filter,omitempty"`
	ResourceNames []string `json:"resourceNames,omitempty"`
}
