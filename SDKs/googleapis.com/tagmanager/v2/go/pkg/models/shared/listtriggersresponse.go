package shared

type ListTriggersResponse struct {
	NextPageToken *string   `json:"nextPageToken"`
	Trigger       []Trigger `json:"trigger"`
}
