package shared



type ListRestorePlansResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    RestorePlans []RestorePlan `json:"restorePlans,omitempty"`
    Unreachable []string `json:"unreachable,omitempty"`
    
}

