package shared

type BatchUpdateValuesResponse struct {
	Responses           []UpdateValuesResponse `json:"responses"`
	SpreadsheetID       *string                `json:"spreadsheetId"`
	TotalUpdatedCells   *int32                 `json:"totalUpdatedCells"`
	TotalUpdatedColumns *int32                 `json:"totalUpdatedColumns"`
	TotalUpdatedRows    *int32                 `json:"totalUpdatedRows"`
	TotalUpdatedSheets  *int32                 `json:"totalUpdatedSheets"`
}
