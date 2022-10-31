package shared



type ShortRepresentation struct {
    Description *string `json:"description,omitempty"`
    Subqueries map[string]int32 `json:"subqueries,omitempty"`
    
}

