package shared

// UpdateFilterViewRequest
// Updates properties of the filter view.
type UpdateFilterViewRequest struct {
	Fields *string     `json:"fields,omitempty"`
	Filter *FilterView `json:"filter,omitempty"`
}
