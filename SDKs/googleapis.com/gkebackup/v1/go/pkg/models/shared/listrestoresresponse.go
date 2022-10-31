package shared



type ListRestoresResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Restores []Restore `json:"restores,omitempty"`
    Unreachable []string `json:"unreachable,omitempty"`
    
}

