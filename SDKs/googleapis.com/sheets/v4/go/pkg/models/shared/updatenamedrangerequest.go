package shared

type UpdateNamedRangeRequest struct {
	Fields     *string     `json:"fields"`
	NamedRange *NamedRange `json:"namedRange"`
}
