package shared




type CreateSheetsChartRequestLinkingModeEnum string

const (
    CreateSheetsChartRequestLinkingModeEnumNotLinkedImage CreateSheetsChartRequestLinkingModeEnum = "NOT_LINKED_IMAGE"
CreateSheetsChartRequestLinkingModeEnumLinked CreateSheetsChartRequestLinkingModeEnum = "LINKED"
)


type CreateSheetsChartRequest struct {
    ChartID *int32 `json:"chartId,omitempty"`
    ElementProperties *PageElementProperties `json:"elementProperties,omitempty"`
    LinkingMode *CreateSheetsChartRequestLinkingModeEnum `json:"linkingMode,omitempty"`
    ObjectID *string `json:"objectId,omitempty"`
    SpreadsheetID *string `json:"spreadsheetId,omitempty"`
    
}

