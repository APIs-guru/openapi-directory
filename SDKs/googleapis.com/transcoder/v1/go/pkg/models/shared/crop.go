package shared

// Crop
// Video cropping configuration for the input video. The cropped input video is scaled to match the output resolution.
type Crop struct {
	BottomPixels *int32 `json:"bottomPixels,omitempty"`
	LeftPixels   *int32 `json:"leftPixels,omitempty"`
	RightPixels  *int32 `json:"rightPixels,omitempty"`
	TopPixels    *int32 `json:"topPixels,omitempty"`
}
