package shared




type VideoFileDetailsVideoStreamRotationEnum string

const (
    VideoFileDetailsVideoStreamRotationEnumNone VideoFileDetailsVideoStreamRotationEnum = "none"
VideoFileDetailsVideoStreamRotationEnumClockwise VideoFileDetailsVideoStreamRotationEnum = "clockwise"
VideoFileDetailsVideoStreamRotationEnumUpsideDown VideoFileDetailsVideoStreamRotationEnum = "upsideDown"
VideoFileDetailsVideoStreamRotationEnumCounterClockwise VideoFileDetailsVideoStreamRotationEnum = "counterClockwise"
VideoFileDetailsVideoStreamRotationEnumOther VideoFileDetailsVideoStreamRotationEnum = "other"
)


type VideoFileDetailsVideoStream struct {
    AspectRatio *float64 `json:"aspectRatio,omitempty"`
    BitrateBps *string `json:"bitrateBps,omitempty"`
    Codec *string `json:"codec,omitempty"`
    FrameRateFps *float64 `json:"frameRateFps,omitempty"`
    HeightPixels *int64 `json:"heightPixels,omitempty"`
    Rotation *VideoFileDetailsVideoStreamRotationEnum `json:"rotation,omitempty"`
    Vendor *string `json:"vendor,omitempty"`
    WidthPixels *int64 `json:"widthPixels,omitempty"`
    
}

