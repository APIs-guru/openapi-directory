package shared

type SyndicateMarshaller struct {
	Content     *string `json:"content"`
	Description *string `json:"description"`
	ID          *int64  `json:"id"`
	MediaType   *string `json:"mediaType"`
	Name        *string `json:"name"`
	SourceURL   *string `json:"sourceUrl"`
}
