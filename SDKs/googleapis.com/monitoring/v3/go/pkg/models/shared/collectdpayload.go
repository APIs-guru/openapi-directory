package shared

type CollectdPayload struct {
	EndTime        *string               `json:"endTime"`
	Metadata       map[string]TypedValue `json:"metadata"`
	Plugin         *string               `json:"plugin"`
	PluginInstance *string               `json:"pluginInstance"`
	StartTime      *string               `json:"startTime"`
	Type           *string               `json:"type"`
	TypeInstance   *string               `json:"typeInstance"`
	Values         []CollectdValue       `json:"values"`
}
