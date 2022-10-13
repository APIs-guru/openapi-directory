package shared

type ListUptimeCheckIpsResponse struct {
	NextPageToken  *string         `json:"nextPageToken"`
	UptimeCheckIps []UptimeCheckIP `json:"uptimeCheckIps"`
}
