package shared



type EpisodeSimple struct {
    Audio *string `json:"audio,omitempty"`
    AudioLengthSec *int64 `json:"audio_length_sec,omitempty"`
    Description *string `json:"description,omitempty"`
    ExplicitContent *bool `json:"explicit_content,omitempty"`
    ID *string `json:"id,omitempty"`
    Image *string `json:"image,omitempty"`
    Link *string `json:"link,omitempty"`
    ListennotesEditURL *string `json:"listennotes_edit_url,omitempty"`
    ListennotesURL *string `json:"listennotes_url,omitempty"`
    MaybeAudioInvalid *bool `json:"maybe_audio_invalid,omitempty"`
    Podcast *PodcastMinimum `json:"podcast,omitempty"`
    PubDateMs *int64 `json:"pub_date_ms,omitempty"`
    Thumbnail *string `json:"thumbnail,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

