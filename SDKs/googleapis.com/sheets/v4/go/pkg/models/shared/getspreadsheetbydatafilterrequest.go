package shared

type GetSpreadsheetByDataFilterRequest struct {
	DataFilters     []DataFilter `json:"dataFilters,omitempty"`
	IncludeGridData *bool        `json:"includeGridData,omitempty"`
}
