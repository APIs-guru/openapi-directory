package shared

type ListHubsResponse struct {
	Hubs          []Hub    `json:"hubs"`
	NextPageToken *string  `json:"nextPageToken"`
	Unreachable   []string `json:"unreachable"`
}
