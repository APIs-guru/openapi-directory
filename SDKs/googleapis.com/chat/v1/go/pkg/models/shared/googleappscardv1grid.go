package shared

type GoogleAppsCardV1Grid struct {
	BorderStyle *GoogleAppsCardV1BorderStyle `json:"borderStyle"`
	ColumnCount *int32                       `json:"columnCount"`
	Items       []GoogleAppsCardV1GridItem   `json:"items"`
	OnClick     *GoogleAppsCardV1OnClick     `json:"onClick"`
	Title       *string                      `json:"title"`
}
