package shared

type Vp9CodecSettings struct {
	BitrateBps      *int32   `json:"bitrateBps,omitempty"`
	CrfLevel        *int32   `json:"crfLevel,omitempty"`
	FrameRate       *float64 `json:"frameRate,omitempty"`
	GopDuration     *string  `json:"gopDuration,omitempty"`
	GopFrameCount   *int32   `json:"gopFrameCount,omitempty"`
	HeightPixels    *int32   `json:"heightPixels,omitempty"`
	PixelFormat     *string  `json:"pixelFormat,omitempty"`
	Profile         *string  `json:"profile,omitempty"`
	RateControlMode *string  `json:"rateControlMode,omitempty"`
	WidthPixels     *int32   `json:"widthPixels,omitempty"`
}
