package shared

type H264CodecSettings struct {
	AllowOpenGop    *bool    `json:"allowOpenGop"`
	AqStrength      *float64 `json:"aqStrength"`
	BFrameCount     *int32   `json:"bFrameCount"`
	BPyramid        *bool    `json:"bPyramid"`
	BitrateBps      *int32   `json:"bitrateBps"`
	CrfLevel        *int32   `json:"crfLevel"`
	EnableTwoPass   *bool    `json:"enableTwoPass"`
	EntropyCoder    *string  `json:"entropyCoder"`
	FrameRate       *float64 `json:"frameRate"`
	GopDuration     *string  `json:"gopDuration"`
	GopFrameCount   *int32   `json:"gopFrameCount"`
	HeightPixels    *int32   `json:"heightPixels"`
	PixelFormat     *string  `json:"pixelFormat"`
	Preset          *string  `json:"preset"`
	Profile         *string  `json:"profile"`
	RateControlMode *string  `json:"rateControlMode"`
	Tune            *string  `json:"tune"`
	VbvFullnessBits *int32   `json:"vbvFullnessBits"`
	VbvSizeBits     *int32   `json:"vbvSizeBits"`
	WidthPixels     *int32   `json:"widthPixels"`
}
