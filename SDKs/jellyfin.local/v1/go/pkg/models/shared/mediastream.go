package shared



type MediaStream struct {
    AspectRatio *string `json:"AspectRatio,omitempty"`
    AverageFrameRate *float32 `json:"AverageFrameRate,omitempty"`
    BitDepth *int32 `json:"BitDepth,omitempty"`
    BitRate *int32 `json:"BitRate,omitempty"`
    ChannelLayout *string `json:"ChannelLayout,omitempty"`
    Channels *int32 `json:"Channels,omitempty"`
    Codec *string `json:"Codec,omitempty"`
    CodecTag *string `json:"CodecTag,omitempty"`
    CodecTimeBase *string `json:"CodecTimeBase,omitempty"`
    ColorPrimaries *string `json:"ColorPrimaries,omitempty"`
    ColorRange *string `json:"ColorRange,omitempty"`
    ColorSpace *string `json:"ColorSpace,omitempty"`
    ColorTransfer *string `json:"ColorTransfer,omitempty"`
    Comment *string `json:"Comment,omitempty"`
    DeliveryMethod *SubtitleDeliveryMethodEnum `json:"DeliveryMethod,omitempty"`
    DeliveryURL *string `json:"DeliveryUrl,omitempty"`
    DisplayTitle *string `json:"DisplayTitle,omitempty"`
    Height *int32 `json:"Height,omitempty"`
    Index *int32 `json:"Index,omitempty"`
    IsAvc *bool `json:"IsAVC,omitempty"`
    IsAnamorphic *bool `json:"IsAnamorphic,omitempty"`
    IsDefault *bool `json:"IsDefault,omitempty"`
    IsExternal *bool `json:"IsExternal,omitempty"`
    IsExternalURL *bool `json:"IsExternalUrl,omitempty"`
    IsForced *bool `json:"IsForced,omitempty"`
    IsInterlaced *bool `json:"IsInterlaced,omitempty"`
    IsTextSubtitleStream *bool `json:"IsTextSubtitleStream,omitempty"`
    Language *string `json:"Language,omitempty"`
    Level *float64 `json:"Level,omitempty"`
    NalLengthSize *string `json:"NalLengthSize,omitempty"`
    PacketLength *int32 `json:"PacketLength,omitempty"`
    Path *string `json:"Path,omitempty"`
    PixelFormat *string `json:"PixelFormat,omitempty"`
    Profile *string `json:"Profile,omitempty"`
    RealFrameRate *float32 `json:"RealFrameRate,omitempty"`
    RefFrames *int32 `json:"RefFrames,omitempty"`
    SampleRate *int32 `json:"SampleRate,omitempty"`
    Score *int32 `json:"Score,omitempty"`
    SupportsExternalStream *bool `json:"SupportsExternalStream,omitempty"`
    TimeBase *string `json:"TimeBase,omitempty"`
    Title *string `json:"Title,omitempty"`
    Type *MediaStreamTypeEnum `json:"Type,omitempty"`
    VideoRange *string `json:"VideoRange,omitempty"`
    Width *int32 `json:"Width,omitempty"`
    LocalizedDefault *string `json:"localizedDefault,omitempty"`
    LocalizedForced *string `json:"localizedForced,omitempty"`
    LocalizedUndefined *string `json:"localizedUndefined,omitempty"`
    
}

