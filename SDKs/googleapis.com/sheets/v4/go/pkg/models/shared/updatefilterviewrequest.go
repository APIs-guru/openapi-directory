package shared



type UpdateFilterViewRequest struct {
    Fields *string `json:"fields,omitempty"`
    Filter *FilterView `json:"filter,omitempty"`
    
}

