package shared

// AggregateBy
// The specification of which data to aggregate.
type AggregateBy struct {
	DataSourceID *string `json:"dataSourceId,omitempty"`
	DataTypeName *string `json:"dataTypeName,omitempty"`
}
