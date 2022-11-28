from dataclasses import dataclass, field
from enum import Enum

class TranscodeReasonEnum(str, Enum):
    CONTAINER_NOT_SUPPORTED = "ContainerNotSupported"
    VIDEO_CODEC_NOT_SUPPORTED = "VideoCodecNotSupported"
    AUDIO_CODEC_NOT_SUPPORTED = "AudioCodecNotSupported"
    CONTAINER_BITRATE_EXCEEDS_LIMIT = "ContainerBitrateExceedsLimit"
    AUDIO_BITRATE_NOT_SUPPORTED = "AudioBitrateNotSupported"
    AUDIO_CHANNELS_NOT_SUPPORTED = "AudioChannelsNotSupported"
    VIDEO_RESOLUTION_NOT_SUPPORTED = "VideoResolutionNotSupported"
    UNKNOWN_VIDEO_STREAM_INFO = "UnknownVideoStreamInfo"
    UNKNOWN_AUDIO_STREAM_INFO = "UnknownAudioStreamInfo"
    AUDIO_PROFILE_NOT_SUPPORTED = "AudioProfileNotSupported"
    AUDIO_SAMPLE_RATE_NOT_SUPPORTED = "AudioSampleRateNotSupported"
    ANAMORPHIC_VIDEO_NOT_SUPPORTED = "AnamorphicVideoNotSupported"
    INTERLACED_VIDEO_NOT_SUPPORTED = "InterlacedVideoNotSupported"
    SECONDARY_AUDIO_NOT_SUPPORTED = "SecondaryAudioNotSupported"
    REF_FRAMES_NOT_SUPPORTED = "RefFramesNotSupported"
    VIDEO_BIT_DEPTH_NOT_SUPPORTED = "VideoBitDepthNotSupported"
    VIDEO_BITRATE_NOT_SUPPORTED = "VideoBitrateNotSupported"
    VIDEO_FRAMERATE_NOT_SUPPORTED = "VideoFramerateNotSupported"
    VIDEO_LEVEL_NOT_SUPPORTED = "VideoLevelNotSupported"
    VIDEO_PROFILE_NOT_SUPPORTED = "VideoProfileNotSupported"
    AUDIO_BIT_DEPTH_NOT_SUPPORTED = "AudioBitDepthNotSupported"
    SUBTITLE_CODEC_NOT_SUPPORTED = "SubtitleCodecNotSupported"
    DIRECT_PLAY_ERROR = "DirectPlayError"

