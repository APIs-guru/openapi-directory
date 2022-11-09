import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LiveStreamConfigurationIssueSeverityEnum {
    Info = "info"
,    Warning = "warning"
,    Error = "error"
}

export enum LiveStreamConfigurationIssueTypeEnum {
    GopSizeOver = "gopSizeOver"
,    GopSizeLong = "gopSizeLong"
,    GopSizeShort = "gopSizeShort"
,    OpenGop = "openGop"
,    BadContainer = "badContainer"
,    AudioBitrateHigh = "audioBitrateHigh"
,    AudioBitrateLow = "audioBitrateLow"
,    AudioSampleRate = "audioSampleRate"
,    BitrateHigh = "bitrateHigh"
,    BitrateLow = "bitrateLow"
,    AudioCodec = "audioCodec"
,    VideoCodec = "videoCodec"
,    NoAudioStream = "noAudioStream"
,    NoVideoStream = "noVideoStream"
,    MultipleVideoStreams = "multipleVideoStreams"
,    MultipleAudioStreams = "multipleAudioStreams"
,    AudioTooManyChannels = "audioTooManyChannels"
,    InterlacedVideo = "interlacedVideo"
,    FrameRateHigh = "frameRateHigh"
,    ResolutionMismatch = "resolutionMismatch"
,    VideoCodecMismatch = "videoCodecMismatch"
,    VideoInterlaceMismatch = "videoInterlaceMismatch"
,    VideoProfileMismatch = "videoProfileMismatch"
,    VideoBitrateMismatch = "videoBitrateMismatch"
,    FramerateMismatch = "framerateMismatch"
,    GopMismatch = "gopMismatch"
,    AudioSampleRateMismatch = "audioSampleRateMismatch"
,    AudioStereoMismatch = "audioStereoMismatch"
,    AudioCodecMismatch = "audioCodecMismatch"
,    AudioBitrateMismatch = "audioBitrateMismatch"
,    VideoResolutionSuboptimal = "videoResolutionSuboptimal"
,    VideoResolutionUnsupported = "videoResolutionUnsupported"
,    VideoIngestionStarved = "videoIngestionStarved"
,    VideoIngestionFasterThanRealtime = "videoIngestionFasterThanRealtime"
}


export class LiveStreamConfigurationIssue extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=severity" })
  severity?: LiveStreamConfigurationIssueSeverityEnum;

  @Metadata({ data: "json, name=type" })
  type?: LiveStreamConfigurationIssueTypeEnum;
}
