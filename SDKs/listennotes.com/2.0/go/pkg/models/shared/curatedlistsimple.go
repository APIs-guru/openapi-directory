package shared

type CuratedListSimple struct {
	Description    *string          `json:"description"`
	ID             *string          `json:"id"`
	ListennotesURL *string          `json:"listennotes_url"`
	Podcasts       []PodcastMinimum `json:"podcasts"`
	PubDateMs      *int64           `json:"pub_date_ms"`
	SourceDomain   *string          `json:"source_domain"`
	SourceURL      *string          `json:"source_url"`
	Title          *string          `json:"title"`
	Total          *int64           `json:"total"`
}
