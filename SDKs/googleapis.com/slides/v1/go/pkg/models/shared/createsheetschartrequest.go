package shared

type CreateSheetsChartRequestLinkingModeEnum string

const (
	CreateSheetsChartRequestLinkingModeEnumNotLinkedImage CreateSheetsChartRequestLinkingModeEnum = "NOT_LINKED_IMAGE"
	CreateSheetsChartRequestLinkingModeEnumLinked         CreateSheetsChartRequestLinkingModeEnum = "LINKED"
)

type CreateSheetsChartRequest struct {
	ChartID           *int32                                   `json:"chartId"`
	ElementProperties *PageElementProperties                   `json:"elementProperties"`
	LinkingMode       *CreateSheetsChartRequestLinkingModeEnum `json:"linkingMode"`
	ObjectID          *string                                  `json:"objectId"`
	SpreadsheetID     *string                                  `json:"spreadsheetId"`
}
