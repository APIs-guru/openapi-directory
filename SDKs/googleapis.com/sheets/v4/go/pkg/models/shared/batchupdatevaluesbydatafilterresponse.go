package shared



type BatchUpdateValuesByDataFilterResponse struct {
    Responses []UpdateValuesByDataFilterResponse `json:"responses,omitempty"`
    SpreadsheetID *string `json:"spreadsheetId,omitempty"`
    TotalUpdatedCells *int32 `json:"totalUpdatedCells,omitempty"`
    TotalUpdatedColumns *int32 `json:"totalUpdatedColumns,omitempty"`
    TotalUpdatedRows *int32 `json:"totalUpdatedRows,omitempty"`
    TotalUpdatedSheets *int32 `json:"totalUpdatedSheets,omitempty"`
    
}

