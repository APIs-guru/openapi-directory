package shared

type SiteResponse struct {
	RowCount *int32       `json:"row_count,omitempty"`
	Sites    []SiteResult `json:"sites,omitempty"`
}
