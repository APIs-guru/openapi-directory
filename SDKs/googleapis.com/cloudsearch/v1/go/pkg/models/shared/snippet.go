package shared



type Snippet struct {
    MatchRanges []MatchRange `json:"matchRanges,omitempty"`
    Snippet *string `json:"snippet,omitempty"`
    
}

