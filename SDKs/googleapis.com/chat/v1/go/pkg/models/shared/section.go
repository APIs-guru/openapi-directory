package shared

// Section
// A section contains a collection of widgets that are rendered (vertically) in the order that they are specified. Across all platforms, cards have a narrow fixed width, so there is currently no need for layout properties (e.g. float).
type Section struct {
	Header  *string        `json:"header,omitempty"`
	Widgets []WidgetMarkup `json:"widgets,omitempty"`
}
