package shared

type LogsPanel struct {
	Filter        *string  `json:"filter"`
	ResourceNames []string `json:"resourceNames"`
}
