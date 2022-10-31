package shared




type ReplaceAllShapesWithSheetsChartRequestLinkingModeEnum string

const (
    ReplaceAllShapesWithSheetsChartRequestLinkingModeEnumNotLinkedImage ReplaceAllShapesWithSheetsChartRequestLinkingModeEnum = "NOT_LINKED_IMAGE"
ReplaceAllShapesWithSheetsChartRequestLinkingModeEnumLinked ReplaceAllShapesWithSheetsChartRequestLinkingModeEnum = "LINKED"
)


type ReplaceAllShapesWithSheetsChartRequest struct {
    ChartID *int32 `json:"chartId,omitempty"`
    ContainsText *SubstringMatchCriteria `json:"containsText,omitempty"`
    LinkingMode *ReplaceAllShapesWithSheetsChartRequestLinkingModeEnum `json:"linkingMode,omitempty"`
    PageObjectIds []string `json:"pageObjectIds,omitempty"`
    SpreadsheetID *string `json:"spreadsheetId,omitempty"`
    
}

