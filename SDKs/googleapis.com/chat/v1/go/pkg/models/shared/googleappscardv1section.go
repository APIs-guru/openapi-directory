package shared

// GoogleAppsCardV1Section
// A section contains a collection of widgets that are rendered vertically in the order that they are specified.
type GoogleAppsCardV1Section struct {
	Collapsible               *bool                    `json:"collapsible,omitempty"`
	Header                    *string                  `json:"header,omitempty"`
	UncollapsibleWidgetsCount *int32                   `json:"uncollapsibleWidgetsCount,omitempty"`
	Widgets                   []GoogleAppsCardV1Widget `json:"widgets,omitempty"`
}
