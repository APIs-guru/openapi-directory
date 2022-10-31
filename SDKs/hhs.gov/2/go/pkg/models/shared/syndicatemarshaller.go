package shared

type SyndicateMarshaller struct {
	Content     *string `json:"content,omitempty"`
	Description *string `json:"description,omitempty"`
	ID          *int64  `json:"id,omitempty"`
	MediaType   *string `json:"mediaType,omitempty"`
	Name        *string `json:"name,omitempty"`
	SourceURL   *string `json:"sourceUrl,omitempty"`
}
