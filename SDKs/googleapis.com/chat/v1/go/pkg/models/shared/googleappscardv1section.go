package shared

type GoogleAppsCardV1Section struct {
	Collapsible               *bool                    `json:"collapsible,omitempty"`
	Header                    *string                  `json:"header,omitempty"`
	UncollapsibleWidgetsCount *int32                   `json:"uncollapsibleWidgetsCount,omitempty"`
	Widgets                   []GoogleAppsCardV1Widget `json:"widgets,omitempty"`
}
