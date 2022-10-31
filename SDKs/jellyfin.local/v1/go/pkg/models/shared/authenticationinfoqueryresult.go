package shared



type AuthenticationInfoQueryResult struct {
    Items []AuthenticationInfo `json:"Items,omitempty"`
    StartIndex *int32 `json:"StartIndex,omitempty"`
    TotalRecordCount *int32 `json:"TotalRecordCount,omitempty"`
    
}

