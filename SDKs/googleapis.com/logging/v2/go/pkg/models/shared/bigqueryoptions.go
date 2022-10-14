package shared

type BigQueryOptions struct {
	UsePartitionedTables            *bool `json:"usePartitionedTables,omitempty"`
	UsesTimestampColumnPartitioning *bool `json:"usesTimestampColumnPartitioning,omitempty"`
}
