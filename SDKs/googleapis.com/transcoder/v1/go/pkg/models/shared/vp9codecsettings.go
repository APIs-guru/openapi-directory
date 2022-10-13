package shared

type Vp9CodecSettings struct {
	BitrateBps      *int32   `json:"bitrateBps"`
	CrfLevel        *int32   `json:"crfLevel"`
	FrameRate       *float64 `json:"frameRate"`
	GopDuration     *string  `json:"gopDuration"`
	GopFrameCount   *int32   `json:"gopFrameCount"`
	HeightPixels    *int32   `json:"heightPixels"`
	PixelFormat     *string  `json:"pixelFormat"`
	Profile         *string  `json:"profile"`
	RateControlMode *string  `json:"rateControlMode"`
	WidthPixels     *int32   `json:"widthPixels"`
}
