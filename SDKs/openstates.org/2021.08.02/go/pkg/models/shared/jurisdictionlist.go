package shared

type JurisdictionList struct {
	Pagination PaginationMeta `json:"pagination"`
	Results    []Jurisdiction `json:"results"`
}
