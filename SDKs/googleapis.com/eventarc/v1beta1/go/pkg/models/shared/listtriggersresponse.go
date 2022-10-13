package shared

type ListTriggersResponse struct {
	NextPageToken *string   `json:"nextPageToken"`
	Triggers      []Trigger `json:"triggers"`
	Unreachable   []string  `json:"unreachable"`
}
