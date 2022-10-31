package shared

type GoogleAppsCardV1Grid struct {
	BorderStyle *GoogleAppsCardV1BorderStyle `json:"borderStyle,omitempty"`
	ColumnCount *int32                       `json:"columnCount,omitempty"`
	Items       []GoogleAppsCardV1GridItem   `json:"items,omitempty"`
	OnClick     *GoogleAppsCardV1OnClick     `json:"onClick,omitempty"`
	Title       *string                      `json:"title,omitempty"`
}
