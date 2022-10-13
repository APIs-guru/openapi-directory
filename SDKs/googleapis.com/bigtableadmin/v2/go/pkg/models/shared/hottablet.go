package shared

type HotTablet struct {
	EndKey              *string  `json:"endKey"`
	EndTime             *string  `json:"endTime"`
	Name                *string  `json:"name"`
	NodeCPUUsagePercent *float32 `json:"nodeCpuUsagePercent"`
	StartKey            *string  `json:"startKey"`
	StartTime           *string  `json:"startTime"`
	TableName           *string  `json:"tableName"`
}
