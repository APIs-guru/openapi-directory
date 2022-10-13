package shared

type ListStreamsResponse struct {
	NextPageToken *string  `json:"nextPageToken"`
	Streams       []Stream `json:"streams"`
	Unreachable   []string `json:"unreachable"`
}
