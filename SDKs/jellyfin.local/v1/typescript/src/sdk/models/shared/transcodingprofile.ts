import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncodingContextEnum } from "./encodingcontextenum";
import { TranscodeSeekInfoEnum } from "./transcodeseekinfoenum";
import { DlnaProfileTypeEnum } from "./dlnaprofiletypeenum";



export class TranscodingProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AudioCodec" })
  audioCodec?: string;

  @SpeakeasyMetadata({ data: "json, name=BreakOnNonKeyFrames" })
  breakOnNonKeyFrames?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Container" })
  container?: string;

  @SpeakeasyMetadata({ data: "json, name=Context" })
  context?: EncodingContextEnum;

  @SpeakeasyMetadata({ data: "json, name=CopyTimestamps" })
  copyTimestamps?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableMpegtsM2TsMode" })
  enableMpegtsM2TsMode?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableSubtitlesInManifest" })
  enableSubtitlesInManifest?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EstimateContentLength" })
  estimateContentLength?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MaxAudioChannels" })
  maxAudioChannels?: string;

  @SpeakeasyMetadata({ data: "json, name=MinSegments" })
  minSegments?: number;

  @SpeakeasyMetadata({ data: "json, name=Protocol" })
  protocol?: string;

  @SpeakeasyMetadata({ data: "json, name=SegmentLength" })
  segmentLength?: number;

  @SpeakeasyMetadata({ data: "json, name=TranscodeSeekInfo" })
  transcodeSeekInfo?: TranscodeSeekInfoEnum;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: DlnaProfileTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=VideoCodec" })
  videoCodec?: string;
}
