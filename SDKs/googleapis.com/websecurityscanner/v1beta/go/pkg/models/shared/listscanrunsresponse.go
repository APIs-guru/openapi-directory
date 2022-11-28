package shared

// ListScanRunsResponse
// Response for the `ListScanRuns` method.
type ListScanRunsResponse struct {
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	ScanRuns      []ScanRun `json:"scanRuns,omitempty"`
}
