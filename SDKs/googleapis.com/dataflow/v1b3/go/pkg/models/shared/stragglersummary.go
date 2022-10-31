package shared



type StragglerSummary struct {
    StragglerCauseCount map[string]string `json:"stragglerCauseCount,omitempty"`
    TotalStragglerCount *string `json:"totalStragglerCount,omitempty"`
    
}

