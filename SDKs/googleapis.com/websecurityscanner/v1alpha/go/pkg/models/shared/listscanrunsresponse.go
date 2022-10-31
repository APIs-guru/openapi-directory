package shared



type ListScanRunsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    ScanRuns []ScanRun `json:"scanRuns,omitempty"`
    
}

