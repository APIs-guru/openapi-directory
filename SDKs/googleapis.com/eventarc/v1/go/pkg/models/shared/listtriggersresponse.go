package shared

type ListTriggersResponse struct {
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	Triggers      []Trigger `json:"triggers,omitempty"`
	Unreachable   []string  `json:"unreachable,omitempty"`
}
