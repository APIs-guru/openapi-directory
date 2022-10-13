package shared

type FetchStaticIpsResponse struct {
	NextPageToken *string  `json:"nextPageToken"`
	StaticIps     []string `json:"staticIps"`
}
