package shared

// HotTablet
// A tablet is a defined by a start and end key and is explained in https://cloud.google.com/bigtable/docs/overview#architecture and https://cloud.google.com/bigtable/docs/performance#optimization. A Hot tablet is a tablet that exhibits high average cpu usage during the time interval from start time to end time.
type HotTablet struct {
	EndKey              *string  `json:"endKey,omitempty"`
	EndTime             *string  `json:"endTime,omitempty"`
	Name                *string  `json:"name,omitempty"`
	NodeCPUUsagePercent *float32 `json:"nodeCpuUsagePercent,omitempty"`
	StartKey            *string  `json:"startKey,omitempty"`
	StartTime           *string  `json:"startTime,omitempty"`
	TableName           *string  `json:"tableName,omitempty"`
}
