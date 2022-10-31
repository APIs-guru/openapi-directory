package shared



type LogMatch struct {
    Filter *string `json:"filter,omitempty"`
    LabelExtractors map[string]string `json:"labelExtractors,omitempty"`
    
}

