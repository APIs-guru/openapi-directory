package shared

type ListUptimeCheckConfigsResponse struct {
	NextPageToken      *string             `json:"nextPageToken"`
	TotalSize          *int32              `json:"totalSize"`
	UptimeCheckConfigs []UptimeCheckConfig `json:"uptimeCheckConfigs"`
}
