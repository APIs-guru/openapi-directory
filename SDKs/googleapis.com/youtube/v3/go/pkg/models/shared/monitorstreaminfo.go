package shared

type MonitorStreamInfo struct {
	BroadcastStreamDelayMs *int64  `json:"broadcastStreamDelayMs"`
	EmbedHTML              *string `json:"embedHtml"`
	EnableMonitorStream    *bool   `json:"enableMonitorStream"`
}
