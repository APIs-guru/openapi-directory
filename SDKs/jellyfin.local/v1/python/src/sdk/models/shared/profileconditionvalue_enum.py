from dataclasses import dataclass, field
from enum import Enum

class ProfileConditionValueEnum(str, Enum):
    AUDIO_CHANNELS = "AudioChannels"
    AUDIO_BITRATE = "AudioBitrate"
    AUDIO_PROFILE = "AudioProfile"
    WIDTH = "Width"
    HEIGHT = "Height"
    HAS64_BIT_OFFSETS = "Has64BitOffsets"
    PACKET_LENGTH = "PacketLength"
    VIDEO_BIT_DEPTH = "VideoBitDepth"
    VIDEO_BITRATE = "VideoBitrate"
    VIDEO_FRAMERATE = "VideoFramerate"
    VIDEO_LEVEL = "VideoLevel"
    VIDEO_PROFILE = "VideoProfile"
    VIDEO_TIMESTAMP = "VideoTimestamp"
    IS_ANAMORPHIC = "IsAnamorphic"
    REF_FRAMES = "RefFrames"
    NUM_AUDIO_STREAMS = "NumAudioStreams"
    NUM_VIDEO_STREAMS = "NumVideoStreams"
    IS_SECONDARY_AUDIO = "IsSecondaryAudio"
    VIDEO_CODEC_TAG = "VideoCodecTag"
    IS_AVC = "IsAvc"
    IS_INTERLACED = "IsInterlaced"
    AUDIO_SAMPLE_RATE = "AudioSampleRate"
    AUDIO_BIT_DEPTH = "AudioBitDepth"

