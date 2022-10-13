package shared

type EpisodeSearchResult struct {
	Audio                  *string                     `json:"audio"`
	AudioLengthSec         *int64                      `json:"audio_length_sec"`
	DescriptionHighlighted *string                     `json:"description_highlighted"`
	DescriptionOriginal    *string                     `json:"description_original"`
	ExplicitContent        *bool                       `json:"explicit_content"`
	ID                     *string                     `json:"id"`
	Image                  *string                     `json:"image"`
	ItunesID               *int64                      `json:"itunes_id"`
	Link                   *string                     `json:"link"`
	ListennotesURL         *string                     `json:"listennotes_url"`
	Podcast                *EpisodeSearchResultPodcast `json:"podcast"`
	PubDateMs              *int64                      `json:"pub_date_ms"`
	Rss                    *string                     `json:"rss"`
	Thumbnail              *string                     `json:"thumbnail"`
	TitleHighlighted       *string                     `json:"title_highlighted"`
	TitleOriginal          *string                     `json:"title_original"`
	TranscriptsHighlighted []string                    `json:"transcripts_highlighted"`
}
