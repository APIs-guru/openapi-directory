package shared

type ListUptimeCheckConfigsResponse struct {
	NextPageToken      *string             `json:"nextPageToken,omitempty"`
	TotalSize          *int32              `json:"totalSize,omitempty"`
	UptimeCheckConfigs []UptimeCheckConfig `json:"uptimeCheckConfigs,omitempty"`
}
