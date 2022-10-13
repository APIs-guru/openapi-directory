package shared

type ListQueuesResponse struct {
	NextPageToken *string `json:"nextPageToken"`
	Queues        []Queue `json:"queues"`
}
