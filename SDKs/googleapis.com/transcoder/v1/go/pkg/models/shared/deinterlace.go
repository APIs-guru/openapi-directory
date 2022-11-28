package shared

// Deinterlace
// Deinterlace configuration for input video.
type Deinterlace struct {
	Bwdif *BwdifConfig `json:"bwdif,omitempty"`
	Yadif *YadifConfig `json:"yadif,omitempty"`
}
