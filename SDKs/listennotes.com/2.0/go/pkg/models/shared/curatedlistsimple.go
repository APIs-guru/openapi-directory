package shared

type CuratedListSimple struct {
	Description    *string          `json:"description,omitempty"`
	ID             *string          `json:"id,omitempty"`
	ListennotesURL *string          `json:"listennotes_url,omitempty"`
	Podcasts       []PodcastMinimum `json:"podcasts,omitempty"`
	PubDateMs      *int64           `json:"pub_date_ms,omitempty"`
	SourceDomain   *string          `json:"source_domain,omitempty"`
	SourceURL      *string          `json:"source_url,omitempty"`
	Title          *string          `json:"title,omitempty"`
	Total          *int64           `json:"total,omitempty"`
}
