package shared

type GetSpreadsheetByDataFilterRequest struct {
	DataFilters     []DataFilter `json:"dataFilters"`
	IncludeGridData *bool        `json:"includeGridData"`
}
