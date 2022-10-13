package shared

type CuratedListSearchResult struct {
	DescriptionHighlighted *string          `json:"description_highlighted"`
	DescriptionOriginal    *string          `json:"description_original"`
	ID                     *string          `json:"id"`
	ListennotesURL         *string          `json:"listennotes_url"`
	Podcasts               []PodcastMinimum `json:"podcasts"`
	PubDateMs              *int64           `json:"pub_date_ms"`
	SourceDomain           *string          `json:"source_domain"`
	SourceURL              *string          `json:"source_url"`
	TitleHighlighted       *string          `json:"title_highlighted"`
	TitleOriginal          *string          `json:"title_original"`
	Total                  *int64           `json:"total"`
}
