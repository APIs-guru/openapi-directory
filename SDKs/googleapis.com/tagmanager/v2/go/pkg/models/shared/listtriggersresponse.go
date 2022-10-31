package shared

type ListTriggersResponse struct {
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	Trigger       []Trigger `json:"trigger,omitempty"`
}
