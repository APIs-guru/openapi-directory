package shared

type CollectdPayload struct {
	EndTime        *string               `json:"endTime,omitempty"`
	Metadata       map[string]TypedValue `json:"metadata,omitempty"`
	Plugin         *string               `json:"plugin,omitempty"`
	PluginInstance *string               `json:"pluginInstance,omitempty"`
	StartTime      *string               `json:"startTime,omitempty"`
	Type           *string               `json:"type,omitempty"`
	TypeInstance   *string               `json:"typeInstance,omitempty"`
	Values         []CollectdValue       `json:"values,omitempty"`
}
