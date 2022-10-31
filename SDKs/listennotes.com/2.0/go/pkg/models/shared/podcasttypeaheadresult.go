package shared



type PodcastTypeaheadResult struct {
    ExplicitContent *bool `json:"explicit_content,omitempty"`
    ID *string `json:"id,omitempty"`
    Image *string `json:"image,omitempty"`
    PublisherHighlighted *string `json:"publisher_highlighted,omitempty"`
    PublisherOriginal *string `json:"publisher_original,omitempty"`
    Thumbnail *string `json:"thumbnail,omitempty"`
    TitleHighlighted *string `json:"title_highlighted,omitempty"`
    TitleOriginal *string `json:"title_original,omitempty"`
    
}

