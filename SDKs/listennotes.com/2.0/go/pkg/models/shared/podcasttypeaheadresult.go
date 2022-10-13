package shared

type PodcastTypeaheadResult struct {
	ExplicitContent      *bool   `json:"explicit_content"`
	ID                   *string `json:"id"`
	Image                *string `json:"image"`
	PublisherHighlighted *string `json:"publisher_highlighted"`
	PublisherOriginal    *string `json:"publisher_original"`
	Thumbnail            *string `json:"thumbnail"`
	TitleHighlighted     *string `json:"title_highlighted"`
	TitleOriginal        *string `json:"title_original"`
}
