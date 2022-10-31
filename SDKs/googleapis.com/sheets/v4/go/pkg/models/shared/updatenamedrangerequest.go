package shared



type UpdateNamedRangeRequest struct {
    Fields *string `json:"fields,omitempty"`
    NamedRange *NamedRange `json:"namedRange,omitempty"`
    
}

