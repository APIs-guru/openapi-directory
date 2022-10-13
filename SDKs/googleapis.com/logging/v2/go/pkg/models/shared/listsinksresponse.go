package shared

type ListSinksResponse struct {
	NextPageToken *string   `json:"nextPageToken"`
	Sinks         []LogSink `json:"sinks"`
}
