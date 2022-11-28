package shared

// BigQueryOptionsInput
// Options that change functionality of a sink exporting data to BigQuery.
type BigQueryOptionsInput struct {
	UsePartitionedTables *bool `json:"usePartitionedTables,omitempty"`
}

// BigQueryOptions
// Options that change functionality of a sink exporting data to BigQuery.
type BigQueryOptions struct {
	UsePartitionedTables            *bool `json:"usePartitionedTables,omitempty"`
	UsesTimestampColumnPartitioning *bool `json:"usesTimestampColumnPartitioning,omitempty"`
}
