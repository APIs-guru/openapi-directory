package shared

type Section struct {
	Header  *string        `json:"header"`
	Widgets []WidgetMarkup `json:"widgets"`
}
