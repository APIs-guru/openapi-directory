package shared

type ListScanConfigsResponse struct {
	NextPageToken *string      `json:"nextPageToken"`
	ScanConfigs   []ScanConfig `json:"scanConfigs"`
}
