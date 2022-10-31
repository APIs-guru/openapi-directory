package shared



type Jurisdiction struct {
    Classification JurisdictionClassificationEnum `json:"classification"`
    DivisionID *string `json:"division_id,omitempty"`
    ID string `json:"id"`
    LatestRuns []RunPlan `json:"latest_runs,omitempty"`
    LegislativeSessions []LegislativeSession `json:"legislative_sessions,omitempty"`
    Name string `json:"name"`
    Organizations []Chamber `json:"organizations,omitempty"`
    URL string `json:"url"`
    
}

