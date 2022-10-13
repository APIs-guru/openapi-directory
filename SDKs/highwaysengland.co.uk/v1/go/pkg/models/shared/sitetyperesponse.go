package shared

type SiteTypeResponse struct {
	RowCount  *int32     `json:"row_count"`
	Sitetypes []SiteType `json:"sitetypes"`
}
