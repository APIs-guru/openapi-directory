package shared

type BigQueryOptions struct {
	UsePartitionedTables            *bool `json:"usePartitionedTables"`
	UsesTimestampColumnPartitioning *bool `json:"usesTimestampColumnPartitioning"`
}
