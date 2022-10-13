package shared

type GoogleAppsCardV1Section struct {
	Collapsible               *bool                    `json:"collapsible"`
	Header                    *string                  `json:"header"`
	UncollapsibleWidgetsCount *int32                   `json:"uncollapsibleWidgetsCount"`
	Widgets                   []GoogleAppsCardV1Widget `json:"widgets"`
}
