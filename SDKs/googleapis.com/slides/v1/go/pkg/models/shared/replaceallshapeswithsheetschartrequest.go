package shared

type ReplaceAllShapesWithSheetsChartRequestLinkingModeEnum string

const (
	ReplaceAllShapesWithSheetsChartRequestLinkingModeEnumNotLinkedImage ReplaceAllShapesWithSheetsChartRequestLinkingModeEnum = "NOT_LINKED_IMAGE"
	ReplaceAllShapesWithSheetsChartRequestLinkingModeEnumLinked         ReplaceAllShapesWithSheetsChartRequestLinkingModeEnum = "LINKED"
)

type ReplaceAllShapesWithSheetsChartRequest struct {
	ChartID       *int32                                                 `json:"chartId"`
	ContainsText  *SubstringMatchCriteria                                `json:"containsText"`
	LinkingMode   *ReplaceAllShapesWithSheetsChartRequestLinkingModeEnum `json:"linkingMode"`
	PageObjectIds []string                                               `json:"pageObjectIds"`
	SpreadsheetID *string                                                `json:"spreadsheetId"`
}
