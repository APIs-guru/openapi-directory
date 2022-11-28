package shared

// H265CodecSettings
// H265 codec settings.
type H265CodecSettings struct {
	AllowOpenGop    *bool    `json:"allowOpenGop,omitempty"`
	AqStrength      *float64 `json:"aqStrength,omitempty"`
	BFrameCount     *int32   `json:"bFrameCount,omitempty"`
	BPyramid        *bool    `json:"bPyramid,omitempty"`
	BitrateBps      *int32   `json:"bitrateBps,omitempty"`
	CrfLevel        *int32   `json:"crfLevel,omitempty"`
	EnableTwoPass   *bool    `json:"enableTwoPass,omitempty"`
	FrameRate       *float64 `json:"frameRate,omitempty"`
	GopDuration     *string  `json:"gopDuration,omitempty"`
	GopFrameCount   *int32   `json:"gopFrameCount,omitempty"`
	HeightPixels    *int32   `json:"heightPixels,omitempty"`
	PixelFormat     *string  `json:"pixelFormat,omitempty"`
	Preset          *string  `json:"preset,omitempty"`
	Profile         *string  `json:"profile,omitempty"`
	RateControlMode *string  `json:"rateControlMode,omitempty"`
	Tune            *string  `json:"tune,omitempty"`
	VbvFullnessBits *int32   `json:"vbvFullnessBits,omitempty"`
	VbvSizeBits     *int32   `json:"vbvSizeBits,omitempty"`
	WidthPixels     *int32   `json:"widthPixels,omitempty"`
}
