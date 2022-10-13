package shared

type CreateNamedRangeRequest struct {
	Name  *string `json:"name"`
	Range *Range  `json:"range"`
}
