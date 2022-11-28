package shared

// VideoStream
// Video stream resource.
type VideoStream struct {
	H264 *H264CodecSettings `json:"h264,omitempty"`
	H265 *H265CodecSettings `json:"h265,omitempty"`
	Vp9  *Vp9CodecSettings  `json:"vp9,omitempty"`
}
