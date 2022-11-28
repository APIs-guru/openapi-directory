package shared

// ResultSetStats
// Additional statistics about a ResultSet or PartialResultSet.
type ResultSetStats struct {
	QueryPlan          *QueryPlan             `json:"queryPlan,omitempty"`
	QueryStats         map[string]interface{} `json:"queryStats,omitempty"`
	RowCountExact      *string                `json:"rowCountExact,omitempty"`
	RowCountLowerBound *string                `json:"rowCountLowerBound,omitempty"`
}
