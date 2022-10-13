package shared

type ListTopicsResponse struct {
	NextPageToken *string `json:"nextPageToken"`
	Topics        []Topic `json:"topics"`
}
