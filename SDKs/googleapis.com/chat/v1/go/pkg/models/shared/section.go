package shared

type Section struct {
	Header  *string        `json:"header,omitempty"`
	Widgets []WidgetMarkup `json:"widgets,omitempty"`
}
