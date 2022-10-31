package shared



type HotTablet struct {
    EndKey *string `json:"endKey,omitempty"`
    EndTime *string `json:"endTime,omitempty"`
    Name *string `json:"name,omitempty"`
    NodeCPUUsagePercent *float32 `json:"nodeCpuUsagePercent,omitempty"`
    StartKey *string `json:"startKey,omitempty"`
    StartTime *string `json:"startTime,omitempty"`
    TableName *string `json:"tableName,omitempty"`
    
}

