package shared

type LiveStreamConfigurationIssueSeverityEnum string

const (
	LiveStreamConfigurationIssueSeverityEnumInfo    LiveStreamConfigurationIssueSeverityEnum = "info"
	LiveStreamConfigurationIssueSeverityEnumWarning LiveStreamConfigurationIssueSeverityEnum = "warning"
	LiveStreamConfigurationIssueSeverityEnumError   LiveStreamConfigurationIssueSeverityEnum = "error"
)

type LiveStreamConfigurationIssueTypeEnum string

const (
	LiveStreamConfigurationIssueTypeEnumGopSizeOver                      LiveStreamConfigurationIssueTypeEnum = "gopSizeOver"
	LiveStreamConfigurationIssueTypeEnumGopSizeLong                      LiveStreamConfigurationIssueTypeEnum = "gopSizeLong"
	LiveStreamConfigurationIssueTypeEnumGopSizeShort                     LiveStreamConfigurationIssueTypeEnum = "gopSizeShort"
	LiveStreamConfigurationIssueTypeEnumOpenGop                          LiveStreamConfigurationIssueTypeEnum = "openGop"
	LiveStreamConfigurationIssueTypeEnumBadContainer                     LiveStreamConfigurationIssueTypeEnum = "badContainer"
	LiveStreamConfigurationIssueTypeEnumAudioBitrateHigh                 LiveStreamConfigurationIssueTypeEnum = "audioBitrateHigh"
	LiveStreamConfigurationIssueTypeEnumAudioBitrateLow                  LiveStreamConfigurationIssueTypeEnum = "audioBitrateLow"
	LiveStreamConfigurationIssueTypeEnumAudioSampleRate                  LiveStreamConfigurationIssueTypeEnum = "audioSampleRate"
	LiveStreamConfigurationIssueTypeEnumBitrateHigh                      LiveStreamConfigurationIssueTypeEnum = "bitrateHigh"
	LiveStreamConfigurationIssueTypeEnumBitrateLow                       LiveStreamConfigurationIssueTypeEnum = "bitrateLow"
	LiveStreamConfigurationIssueTypeEnumAudioCodec                       LiveStreamConfigurationIssueTypeEnum = "audioCodec"
	LiveStreamConfigurationIssueTypeEnumVideoCodec                       LiveStreamConfigurationIssueTypeEnum = "videoCodec"
	LiveStreamConfigurationIssueTypeEnumNoAudioStream                    LiveStreamConfigurationIssueTypeEnum = "noAudioStream"
	LiveStreamConfigurationIssueTypeEnumNoVideoStream                    LiveStreamConfigurationIssueTypeEnum = "noVideoStream"
	LiveStreamConfigurationIssueTypeEnumMultipleVideoStreams             LiveStreamConfigurationIssueTypeEnum = "multipleVideoStreams"
	LiveStreamConfigurationIssueTypeEnumMultipleAudioStreams             LiveStreamConfigurationIssueTypeEnum = "multipleAudioStreams"
	LiveStreamConfigurationIssueTypeEnumAudioTooManyChannels             LiveStreamConfigurationIssueTypeEnum = "audioTooManyChannels"
	LiveStreamConfigurationIssueTypeEnumInterlacedVideo                  LiveStreamConfigurationIssueTypeEnum = "interlacedVideo"
	LiveStreamConfigurationIssueTypeEnumFrameRateHigh                    LiveStreamConfigurationIssueTypeEnum = "frameRateHigh"
	LiveStreamConfigurationIssueTypeEnumResolutionMismatch               LiveStreamConfigurationIssueTypeEnum = "resolutionMismatch"
	LiveStreamConfigurationIssueTypeEnumVideoCodecMismatch               LiveStreamConfigurationIssueTypeEnum = "videoCodecMismatch"
	LiveStreamConfigurationIssueTypeEnumVideoInterlaceMismatch           LiveStreamConfigurationIssueTypeEnum = "videoInterlaceMismatch"
	LiveStreamConfigurationIssueTypeEnumVideoProfileMismatch             LiveStreamConfigurationIssueTypeEnum = "videoProfileMismatch"
	LiveStreamConfigurationIssueTypeEnumVideoBitrateMismatch             LiveStreamConfigurationIssueTypeEnum = "videoBitrateMismatch"
	LiveStreamConfigurationIssueTypeEnumFramerateMismatch                LiveStreamConfigurationIssueTypeEnum = "framerateMismatch"
	LiveStreamConfigurationIssueTypeEnumGopMismatch                      LiveStreamConfigurationIssueTypeEnum = "gopMismatch"
	LiveStreamConfigurationIssueTypeEnumAudioSampleRateMismatch          LiveStreamConfigurationIssueTypeEnum = "audioSampleRateMismatch"
	LiveStreamConfigurationIssueTypeEnumAudioStereoMismatch              LiveStreamConfigurationIssueTypeEnum = "audioStereoMismatch"
	LiveStreamConfigurationIssueTypeEnumAudioCodecMismatch               LiveStreamConfigurationIssueTypeEnum = "audioCodecMismatch"
	LiveStreamConfigurationIssueTypeEnumAudioBitrateMismatch             LiveStreamConfigurationIssueTypeEnum = "audioBitrateMismatch"
	LiveStreamConfigurationIssueTypeEnumVideoResolutionSuboptimal        LiveStreamConfigurationIssueTypeEnum = "videoResolutionSuboptimal"
	LiveStreamConfigurationIssueTypeEnumVideoResolutionUnsupported       LiveStreamConfigurationIssueTypeEnum = "videoResolutionUnsupported"
	LiveStreamConfigurationIssueTypeEnumVideoIngestionStarved            LiveStreamConfigurationIssueTypeEnum = "videoIngestionStarved"
	LiveStreamConfigurationIssueTypeEnumVideoIngestionFasterThanRealtime LiveStreamConfigurationIssueTypeEnum = "videoIngestionFasterThanRealtime"
)

type LiveStreamConfigurationIssue struct {
	Description *string                                   `json:"description,omitempty"`
	Reason      *string                                   `json:"reason,omitempty"`
	Severity    *LiveStreamConfigurationIssueSeverityEnum `json:"severity,omitempty"`
	Type        *LiveStreamConfigurationIssueTypeEnum     `json:"type,omitempty"`
}
