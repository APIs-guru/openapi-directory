package shared



type MonitorStreamInfo struct {
    BroadcastStreamDelayMs *int64 `json:"broadcastStreamDelayMs,omitempty"`
    EmbedHTML *string `json:"embedHtml,omitempty"`
    EnableMonitorStream *bool `json:"enableMonitorStream,omitempty"`
    
}

