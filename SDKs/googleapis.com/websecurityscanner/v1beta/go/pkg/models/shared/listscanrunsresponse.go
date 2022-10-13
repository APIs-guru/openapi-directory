package shared

type ListScanRunsResponse struct {
	NextPageToken *string   `json:"nextPageToken"`
	ScanRuns      []ScanRun `json:"scanRuns"`
}
