package shared

type ResultSetStats struct {
	QueryPlan          *QueryPlan             `json:"queryPlan"`
	QueryStats         map[string]interface{} `json:"queryStats"`
	RowCountExact      *string                `json:"rowCountExact"`
	RowCountLowerBound *string                `json:"rowCountLowerBound"`
}
