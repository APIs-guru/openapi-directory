package shared



type FetchStaticIpsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    StaticIps []string `json:"staticIps,omitempty"`
    
}

