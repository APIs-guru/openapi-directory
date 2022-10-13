package shared

type VideoFileDetailsVideoStreamRotationEnum string

const (
	VideoFileDetailsVideoStreamRotationEnumNone             VideoFileDetailsVideoStreamRotationEnum = "none"
	VideoFileDetailsVideoStreamRotationEnumClockwise        VideoFileDetailsVideoStreamRotationEnum = "clockwise"
	VideoFileDetailsVideoStreamRotationEnumUpsideDown       VideoFileDetailsVideoStreamRotationEnum = "upsideDown"
	VideoFileDetailsVideoStreamRotationEnumCounterClockwise VideoFileDetailsVideoStreamRotationEnum = "counterClockwise"
	VideoFileDetailsVideoStreamRotationEnumOther            VideoFileDetailsVideoStreamRotationEnum = "other"
)

type VideoFileDetailsVideoStream struct {
	AspectRatio  *float64                                 `json:"aspectRatio"`
	BitrateBps   *string                                  `json:"bitrateBps"`
	Codec        *string                                  `json:"codec"`
	FrameRateFps *float64                                 `json:"frameRateFps"`
	HeightPixels *int64                                   `json:"heightPixels"`
	Rotation     *VideoFileDetailsVideoStreamRotationEnum `json:"rotation"`
	Vendor       *string                                  `json:"vendor"`
	WidthPixels  *int64                                   `json:"widthPixels"`
}
