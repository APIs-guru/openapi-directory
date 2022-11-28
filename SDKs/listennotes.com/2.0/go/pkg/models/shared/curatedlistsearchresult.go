package shared

// CuratedListSearchResult
// When **type** is *curated*.
type CuratedListSearchResult struct {
	DescriptionHighlighted *string          `json:"description_highlighted,omitempty"`
	DescriptionOriginal    *string          `json:"description_original,omitempty"`
	ID                     *string          `json:"id,omitempty"`
	ListennotesURL         *string          `json:"listennotes_url,omitempty"`
	Podcasts               []PodcastMinimum `json:"podcasts,omitempty"`
	PubDateMs              *int64           `json:"pub_date_ms,omitempty"`
	SourceDomain           *string          `json:"source_domain,omitempty"`
	SourceURL              *string          `json:"source_url,omitempty"`
	TitleHighlighted       *string          `json:"title_highlighted,omitempty"`
	TitleOriginal          *string          `json:"title_original,omitempty"`
	Total                  *int64           `json:"total,omitempty"`
}
