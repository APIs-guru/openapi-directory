package shared

// ListScanConfigsResponse
// A list of scan configs for the project.
type ListScanConfigsResponse struct {
	NextPageToken *string      `json:"nextPageToken,omitempty"`
	ScanConfigs   []ScanConfig `json:"scanConfigs,omitempty"`
}
