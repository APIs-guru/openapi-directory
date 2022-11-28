package shared

// Pad
// Pad filter configuration for the input video. The padded input video is scaled after padding with black to match the output resolution.
type Pad struct {
	BottomPixels *int32 `json:"bottomPixels,omitempty"`
	LeftPixels   *int32 `json:"leftPixels,omitempty"`
	RightPixels  *int32 `json:"rightPixels,omitempty"`
	TopPixels    *int32 `json:"topPixels,omitempty"`
}
