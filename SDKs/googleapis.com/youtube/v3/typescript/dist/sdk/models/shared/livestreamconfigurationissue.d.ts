import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LiveStreamConfigurationIssueSeverityEnum {
    Info = "info",
    Warning = "warning",
    Error = "error"
}
export declare enum LiveStreamConfigurationIssueTypeEnum {
    GopSizeOver = "gopSizeOver",
    GopSizeLong = "gopSizeLong",
    GopSizeShort = "gopSizeShort",
    OpenGop = "openGop",
    BadContainer = "badContainer",
    AudioBitrateHigh = "audioBitrateHigh",
    AudioBitrateLow = "audioBitrateLow",
    AudioSampleRate = "audioSampleRate",
    BitrateHigh = "bitrateHigh",
    BitrateLow = "bitrateLow",
    AudioCodec = "audioCodec",
    VideoCodec = "videoCodec",
    NoAudioStream = "noAudioStream",
    NoVideoStream = "noVideoStream",
    MultipleVideoStreams = "multipleVideoStreams",
    MultipleAudioStreams = "multipleAudioStreams",
    AudioTooManyChannels = "audioTooManyChannels",
    InterlacedVideo = "interlacedVideo",
    FrameRateHigh = "frameRateHigh",
    ResolutionMismatch = "resolutionMismatch",
    VideoCodecMismatch = "videoCodecMismatch",
    VideoInterlaceMismatch = "videoInterlaceMismatch",
    VideoProfileMismatch = "videoProfileMismatch",
    VideoBitrateMismatch = "videoBitrateMismatch",
    FramerateMismatch = "framerateMismatch",
    GopMismatch = "gopMismatch",
    AudioSampleRateMismatch = "audioSampleRateMismatch",
    AudioStereoMismatch = "audioStereoMismatch",
    AudioCodecMismatch = "audioCodecMismatch",
    AudioBitrateMismatch = "audioBitrateMismatch",
    VideoResolutionSuboptimal = "videoResolutionSuboptimal",
    VideoResolutionUnsupported = "videoResolutionUnsupported",
    VideoIngestionStarved = "videoIngestionStarved",
    VideoIngestionFasterThanRealtime = "videoIngestionFasterThanRealtime"
}
export declare class LiveStreamConfigurationIssue extends SpeakeasyBase {
    description?: string;
    reason?: string;
    severity?: LiveStreamConfigurationIssueSeverityEnum;
    type?: LiveStreamConfigurationIssueTypeEnum;
}
