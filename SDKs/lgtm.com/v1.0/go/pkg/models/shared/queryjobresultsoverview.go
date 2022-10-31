package shared



type QueryjobResultsOverview struct {
    Data []QueryjobResultsOverviewEntry `json:"data,omitempty"`
    Next *string `json:"next,omitempty"`
    
}

