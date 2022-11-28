package shared

// FetchStaticIpsResponse
// Response message for a 'FetchStaticIps' response.
type FetchStaticIpsResponse struct {
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	StaticIps     []string `json:"staticIps,omitempty"`
}
