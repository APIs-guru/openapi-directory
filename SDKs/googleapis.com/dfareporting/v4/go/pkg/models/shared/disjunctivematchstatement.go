package shared



type DisjunctiveMatchStatement struct {
    EventFilters []EventFilter `json:"eventFilters,omitempty"`
    Kind *string `json:"kind,omitempty"`
    
}

