package shared



type QueryFilters struct {
    Genres []NameGUIDPair `json:"Genres,omitempty"`
    Tags []string `json:"Tags,omitempty"`
    
}

