package shared

type VideoStream struct {
	H264 *H264CodecSettings `json:"h264"`
	H265 *H265CodecSettings `json:"h265"`
	Vp9  *Vp9CodecSettings  `json:"vp9"`
}
