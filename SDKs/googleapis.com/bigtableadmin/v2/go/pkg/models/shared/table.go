package shared




type TableGranularityEnum string

const (
    TableGranularityEnumTimestampGranularityUnspecified TableGranularityEnum = "TIMESTAMP_GRANULARITY_UNSPECIFIED"
TableGranularityEnumMillis TableGranularityEnum = "MILLIS"
)


type Table struct {
    ClusterStates map[string]ClusterState `json:"clusterStates,omitempty"`
    ColumnFamilies map[string]ColumnFamily `json:"columnFamilies,omitempty"`
    Granularity *TableGranularityEnum `json:"granularity,omitempty"`
    Name *string `json:"name,omitempty"`
    RestoreInfo *RestoreInfo `json:"restoreInfo,omitempty"`
    
}

