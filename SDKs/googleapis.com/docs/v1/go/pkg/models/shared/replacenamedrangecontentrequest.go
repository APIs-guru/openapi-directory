package shared



type ReplaceNamedRangeContentRequest struct {
    NamedRangeID *string `json:"namedRangeId,omitempty"`
    NamedRangeName *string `json:"namedRangeName,omitempty"`
    Text *string `json:"text,omitempty"`
    
}

