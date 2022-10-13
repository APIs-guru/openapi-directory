package shared

type TableGranularityEnum string

const (
	TableGranularityEnumTimestampGranularityUnspecified TableGranularityEnum = "TIMESTAMP_GRANULARITY_UNSPECIFIED"
	TableGranularityEnumMillis                          TableGranularityEnum = "MILLIS"
)

type Table struct {
	ClusterStates  map[string]ClusterState `json:"clusterStates"`
	ColumnFamilies map[string]ColumnFamily `json:"columnFamilies"`
	Granularity    *TableGranularityEnum   `json:"granularity"`
	Name           *string                 `json:"name"`
	RestoreInfo    *RestoreInfo            `json:"restoreInfo"`
}
