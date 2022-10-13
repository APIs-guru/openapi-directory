package shared

type CustomAudio struct {
	Audio          *string `json:"audio"`
	AudioLengthSec *int64  `json:"audio_length_sec"`
	Image          *string `json:"image"`
	PubDateMs      *int64  `json:"pub_date_ms"`
	Thumbnail      *string `json:"thumbnail"`
	Title          *string `json:"title"`
}
