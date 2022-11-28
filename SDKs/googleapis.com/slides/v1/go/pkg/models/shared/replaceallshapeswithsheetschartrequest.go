package shared

type ReplaceAllShapesWithSheetsChartRequestLinkingModeEnum string

const (
	ReplaceAllShapesWithSheetsChartRequestLinkingModeEnumNotLinkedImage ReplaceAllShapesWithSheetsChartRequestLinkingModeEnum = "NOT_LINKED_IMAGE"
	ReplaceAllShapesWithSheetsChartRequestLinkingModeEnumLinked         ReplaceAllShapesWithSheetsChartRequestLinkingModeEnum = "LINKED"
)

// ReplaceAllShapesWithSheetsChartRequest
// Replaces all shapes that match the given criteria with the provided Google Sheets chart. The chart will be scaled and centered to fit within the bounds of the original shape. NOTE: Replacing shapes with a chart requires at least one of the spreadsheets.readonly, spreadsheets, drive.readonly, or drive OAuth scopes.
type ReplaceAllShapesWithSheetsChartRequest struct {
	ChartID       *int32                                                 `json:"chartId,omitempty"`
	ContainsText  *SubstringMatchCriteria                                `json:"containsText,omitempty"`
	LinkingMode   *ReplaceAllShapesWithSheetsChartRequestLinkingModeEnum `json:"linkingMode,omitempty"`
	PageObjectIds []string                                               `json:"pageObjectIds,omitempty"`
	SpreadsheetID *string                                                `json:"spreadsheetId,omitempty"`
}
