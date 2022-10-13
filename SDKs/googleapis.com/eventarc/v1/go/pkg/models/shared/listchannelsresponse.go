package shared

type ListChannelsResponse struct {
	Channels      []Channel `json:"channels"`
	NextPageToken *string   `json:"nextPageToken"`
	Unreachable   []string  `json:"unreachable"`
}
