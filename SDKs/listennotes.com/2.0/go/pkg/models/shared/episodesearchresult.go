package shared

// EpisodeSearchResult
// When **type** is *episode*.
type EpisodeSearchResult struct {
	Audio                  *string                     `json:"audio,omitempty"`
	AudioLengthSec         *int64                      `json:"audio_length_sec,omitempty"`
	DescriptionHighlighted *string                     `json:"description_highlighted,omitempty"`
	DescriptionOriginal    *string                     `json:"description_original,omitempty"`
	ExplicitContent        *bool                       `json:"explicit_content,omitempty"`
	ID                     *string                     `json:"id,omitempty"`
	Image                  *string                     `json:"image,omitempty"`
	ItunesID               *int64                      `json:"itunes_id,omitempty"`
	Link                   *string                     `json:"link,omitempty"`
	ListennotesURL         *string                     `json:"listennotes_url,omitempty"`
	Podcast                *EpisodeSearchResultPodcast `json:"podcast,omitempty"`
	PubDateMs              *int64                      `json:"pub_date_ms,omitempty"`
	Rss                    *string                     `json:"rss,omitempty"`
	Thumbnail              *string                     `json:"thumbnail,omitempty"`
	TitleHighlighted       *string                     `json:"title_highlighted,omitempty"`
	TitleOriginal          *string                     `json:"title_original,omitempty"`
	TranscriptsHighlighted []string                    `json:"transcripts_highlighted,omitempty"`
}
