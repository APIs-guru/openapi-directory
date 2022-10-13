package shared

type TranscodingProfile struct {
	AudioCodec                *string                `json:"AudioCodec"`
	BreakOnNonKeyFrames       *bool                  `json:"BreakOnNonKeyFrames"`
	Container                 *string                `json:"Container"`
	Context                   *EncodingContextEnum   `json:"Context"`
	CopyTimestamps            *bool                  `json:"CopyTimestamps"`
	EnableMpegtsM2TsMode      *bool                  `json:"EnableMpegtsM2TsMode"`
	EnableSubtitlesInManifest *bool                  `json:"EnableSubtitlesInManifest"`
	EstimateContentLength     *bool                  `json:"EstimateContentLength"`
	MaxAudioChannels          *string                `json:"MaxAudioChannels"`
	MinSegments               *int32                 `json:"MinSegments"`
	Protocol                  *string                `json:"Protocol"`
	SegmentLength             *int32                 `json:"SegmentLength"`
	TranscodeSeekInfo         *TranscodeSeekInfoEnum `json:"TranscodeSeekInfo"`
	Type                      *DlnaProfileTypeEnum   `json:"Type"`
	VideoCodec                *string                `json:"VideoCodec"`
}
