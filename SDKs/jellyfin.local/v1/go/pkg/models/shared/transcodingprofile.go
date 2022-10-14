package shared

type TranscodingProfile struct {
	AudioCodec                *string                `json:"AudioCodec,omitempty"`
	BreakOnNonKeyFrames       *bool                  `json:"BreakOnNonKeyFrames,omitempty"`
	Container                 *string                `json:"Container,omitempty"`
	Context                   *EncodingContextEnum   `json:"Context,omitempty"`
	CopyTimestamps            *bool                  `json:"CopyTimestamps,omitempty"`
	EnableMpegtsM2TsMode      *bool                  `json:"EnableMpegtsM2TsMode,omitempty"`
	EnableSubtitlesInManifest *bool                  `json:"EnableSubtitlesInManifest,omitempty"`
	EstimateContentLength     *bool                  `json:"EstimateContentLength,omitempty"`
	MaxAudioChannels          *string                `json:"MaxAudioChannels,omitempty"`
	MinSegments               *int32                 `json:"MinSegments,omitempty"`
	Protocol                  *string                `json:"Protocol,omitempty"`
	SegmentLength             *int32                 `json:"SegmentLength,omitempty"`
	TranscodeSeekInfo         *TranscodeSeekInfoEnum `json:"TranscodeSeekInfo,omitempty"`
	Type                      *DlnaProfileTypeEnum   `json:"Type,omitempty"`
	VideoCodec                *string                `json:"VideoCodec,omitempty"`
}
