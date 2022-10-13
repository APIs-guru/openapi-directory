package shared

type UpdateFilterViewRequest struct {
	Fields *string     `json:"fields"`
	Filter *FilterView `json:"filter"`
}
