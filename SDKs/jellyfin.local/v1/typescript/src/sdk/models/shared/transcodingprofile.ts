import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EncodingContextEnum } from "./encodingcontextenum";
import { TranscodeSeekInfoEnum } from "./transcodeseekinfoenum";
import { DlnaProfileTypeEnum } from "./dlnaprofiletypeenum";


export class TranscodingProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=AudioCodec" })
  audioCodec?: string;

  @Metadata({ data: "json, name=BreakOnNonKeyFrames" })
  breakOnNonKeyFrames?: boolean;

  @Metadata({ data: "json, name=Container" })
  container?: string;

  @Metadata({ data: "json, name=Context" })
  context?: EncodingContextEnum;

  @Metadata({ data: "json, name=CopyTimestamps" })
  copyTimestamps?: boolean;

  @Metadata({ data: "json, name=EnableMpegtsM2TsMode" })
  enableMpegtsM2TsMode?: boolean;

  @Metadata({ data: "json, name=EnableSubtitlesInManifest" })
  enableSubtitlesInManifest?: boolean;

  @Metadata({ data: "json, name=EstimateContentLength" })
  estimateContentLength?: boolean;

  @Metadata({ data: "json, name=MaxAudioChannels" })
  maxAudioChannels?: string;

  @Metadata({ data: "json, name=MinSegments" })
  minSegments?: number;

  @Metadata({ data: "json, name=Protocol" })
  protocol?: string;

  @Metadata({ data: "json, name=SegmentLength" })
  segmentLength?: number;

  @Metadata({ data: "json, name=TranscodeSeekInfo" })
  transcodeSeekInfo?: TranscodeSeekInfoEnum;

  @Metadata({ data: "json, name=Type" })
  type?: DlnaProfileTypeEnum;

  @Metadata({ data: "json, name=VideoCodec" })
  videoCodec?: string;
}
