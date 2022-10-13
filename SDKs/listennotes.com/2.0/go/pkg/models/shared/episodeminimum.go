package shared

type EpisodeMinimum struct {
	Audio              *string `json:"audio"`
	AudioLengthSec     *int64  `json:"audio_length_sec"`
	Description        *string `json:"description"`
	ExplicitContent    *bool   `json:"explicit_content"`
	ID                 *string `json:"id"`
	Image              *string `json:"image"`
	Link               *string `json:"link"`
	ListennotesEditURL *string `json:"listennotes_edit_url"`
	ListennotesURL     *string `json:"listennotes_url"`
	MaybeAudioInvalid  *bool   `json:"maybe_audio_invalid"`
	PubDateMs          *int64  `json:"pub_date_ms"`
	Thumbnail          *string `json:"thumbnail"`
	Title              *string `json:"title"`
}
