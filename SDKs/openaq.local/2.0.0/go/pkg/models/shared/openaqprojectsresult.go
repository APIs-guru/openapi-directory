package shared



type OpenAqProjectsResult struct {
    Meta *Meta `json:"meta,omitempty"`
    Results []ProjectsRow `json:"results"`
    
}

