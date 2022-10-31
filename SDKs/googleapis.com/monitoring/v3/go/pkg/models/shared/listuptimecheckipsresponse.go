package shared



type ListUptimeCheckIpsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    UptimeCheckIps []UptimeCheckIP `json:"uptimeCheckIps,omitempty"`
    
}

