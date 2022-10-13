package shared

type ListTopicsResponse struct {
	NextPageToken *string `json:"nextPageToken"`
	Topic         []Topic `json:"topic"`
}
