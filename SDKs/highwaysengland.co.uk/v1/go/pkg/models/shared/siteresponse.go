package shared

type SiteResponse struct {
	RowCount *int32       `json:"row_count"`
	Sites    []SiteResult `json:"sites"`
}
