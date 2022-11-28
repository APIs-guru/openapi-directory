package shared

// ListUptimeCheckIpsResponse
// The protocol for the ListUptimeCheckIps response.
type ListUptimeCheckIpsResponse struct {
	NextPageToken  *string         `json:"nextPageToken,omitempty"`
	UptimeCheckIps []UptimeCheckIP `json:"uptimeCheckIps,omitempty"`
}
