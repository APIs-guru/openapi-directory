package shared



type ActivityLogEntryQueryResult struct {
    Items []ActivityLogEntry `json:"Items,omitempty"`
    StartIndex *int32 `json:"StartIndex,omitempty"`
    TotalRecordCount *int32 `json:"TotalRecordCount,omitempty"`
    
}

