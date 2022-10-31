package shared



type ResultSetStats struct {
    QueryPlan *QueryPlan `json:"queryPlan,omitempty"`
    QueryStats map[string]interface{} `json:"queryStats,omitempty"`
    RowCountExact *string `json:"rowCountExact,omitempty"`
    RowCountLowerBound *string `json:"rowCountLowerBound,omitempty"`
    
}

