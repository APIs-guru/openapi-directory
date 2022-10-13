package shared

type TranscodeReasonEnum string

const (
	TranscodeReasonEnumContainerNotSupported        TranscodeReasonEnum = "ContainerNotSupported"
	TranscodeReasonEnumVideoCodecNotSupported       TranscodeReasonEnum = "VideoCodecNotSupported"
	TranscodeReasonEnumAudioCodecNotSupported       TranscodeReasonEnum = "AudioCodecNotSupported"
	TranscodeReasonEnumContainerBitrateExceedsLimit TranscodeReasonEnum = "ContainerBitrateExceedsLimit"
	TranscodeReasonEnumAudioBitrateNotSupported     TranscodeReasonEnum = "AudioBitrateNotSupported"
	TranscodeReasonEnumAudioChannelsNotSupported    TranscodeReasonEnum = "AudioChannelsNotSupported"
	TranscodeReasonEnumVideoResolutionNotSupported  TranscodeReasonEnum = "VideoResolutionNotSupported"
	TranscodeReasonEnumUnknownVideoStreamInfo       TranscodeReasonEnum = "UnknownVideoStreamInfo"
	TranscodeReasonEnumUnknownAudioStreamInfo       TranscodeReasonEnum = "UnknownAudioStreamInfo"
	TranscodeReasonEnumAudioProfileNotSupported     TranscodeReasonEnum = "AudioProfileNotSupported"
	TranscodeReasonEnumAudioSampleRateNotSupported  TranscodeReasonEnum = "AudioSampleRateNotSupported"
	TranscodeReasonEnumAnamorphicVideoNotSupported  TranscodeReasonEnum = "AnamorphicVideoNotSupported"
	TranscodeReasonEnumInterlacedVideoNotSupported  TranscodeReasonEnum = "InterlacedVideoNotSupported"
	TranscodeReasonEnumSecondaryAudioNotSupported   TranscodeReasonEnum = "SecondaryAudioNotSupported"
	TranscodeReasonEnumRefFramesNotSupported        TranscodeReasonEnum = "RefFramesNotSupported"
	TranscodeReasonEnumVideoBitDepthNotSupported    TranscodeReasonEnum = "VideoBitDepthNotSupported"
	TranscodeReasonEnumVideoBitrateNotSupported     TranscodeReasonEnum = "VideoBitrateNotSupported"
	TranscodeReasonEnumVideoFramerateNotSupported   TranscodeReasonEnum = "VideoFramerateNotSupported"
	TranscodeReasonEnumVideoLevelNotSupported       TranscodeReasonEnum = "VideoLevelNotSupported"
	TranscodeReasonEnumVideoProfileNotSupported     TranscodeReasonEnum = "VideoProfileNotSupported"
	TranscodeReasonEnumAudioBitDepthNotSupported    TranscodeReasonEnum = "AudioBitDepthNotSupported"
	TranscodeReasonEnumSubtitleCodecNotSupported    TranscodeReasonEnum = "SubtitleCodecNotSupported"
	TranscodeReasonEnumDirectPlayError              TranscodeReasonEnum = "DirectPlayError"
)
