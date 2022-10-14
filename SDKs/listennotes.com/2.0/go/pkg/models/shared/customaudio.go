package shared

type CustomAudio struct {
	Audio          *string `json:"audio,omitempty"`
	AudioLengthSec *int64  `json:"audio_length_sec,omitempty"`
	Image          *string `json:"image,omitempty"`
	PubDateMs      *int64  `json:"pub_date_ms,omitempty"`
	Thumbnail      *string `json:"thumbnail,omitempty"`
	Title          *string `json:"title,omitempty"`
}
