package shared

type ListTraceSinksResponse struct {
	NextPageToken *string     `json:"nextPageToken"`
	Sinks         []TraceSink `json:"sinks"`
}
