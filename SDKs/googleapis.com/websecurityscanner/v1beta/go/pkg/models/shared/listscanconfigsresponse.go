package shared

// ListScanConfigsResponse
// Response for the `ListScanConfigs` method.
type ListScanConfigsResponse struct {
	NextPageToken *string      `json:"nextPageToken,omitempty"`
	ScanConfigs   []ScanConfig `json:"scanConfigs,omitempty"`
}
