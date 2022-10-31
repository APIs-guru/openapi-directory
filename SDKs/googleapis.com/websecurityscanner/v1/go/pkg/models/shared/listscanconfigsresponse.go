package shared



type ListScanConfigsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    ScanConfigs []ScanConfig `json:"scanConfigs,omitempty"`
    
}

