package shared

type CommitteeList struct {
	Pagination PaginationMeta `json:"pagination"`
	Results    []Committee    `json:"results"`
}
