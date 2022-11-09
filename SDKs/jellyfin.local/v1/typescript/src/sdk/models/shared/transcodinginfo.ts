import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TranscodeReasonEnum } from "./transcodereasonenum";


export class TranscodingInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=AudioChannels" })
  audioChannels?: number;

  @Metadata({ data: "json, name=AudioCodec" })
  audioCodec?: string;

  @Metadata({ data: "json, name=Bitrate" })
  bitrate?: number;

  @Metadata({ data: "json, name=CompletionPercentage" })
  completionPercentage?: number;

  @Metadata({ data: "json, name=Container" })
  container?: string;

  @Metadata({ data: "json, name=Framerate" })
  framerate?: number;

  @Metadata({ data: "json, name=Height" })
  height?: number;

  @Metadata({ data: "json, name=IsAudioDirect" })
  isAudioDirect?: boolean;

  @Metadata({ data: "json, name=IsVideoDirect" })
  isVideoDirect?: boolean;

  @Metadata({ data: "json, name=TranscodeReasons" })
  transcodeReasons?: TranscodeReasonEnum[];

  @Metadata({ data: "json, name=VideoCodec" })
  videoCodec?: string;

  @Metadata({ data: "json, name=Width" })
  width?: number;
}
