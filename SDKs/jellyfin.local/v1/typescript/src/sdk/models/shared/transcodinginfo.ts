import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TranscodeReasonEnum } from "./transcodereasonenum";



export class TranscodingInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AudioChannels" })
  audioChannels?: number;

  @SpeakeasyMetadata({ data: "json, name=AudioCodec" })
  audioCodec?: string;

  @SpeakeasyMetadata({ data: "json, name=Bitrate" })
  bitrate?: number;

  @SpeakeasyMetadata({ data: "json, name=CompletionPercentage" })
  completionPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=Container" })
  container?: string;

  @SpeakeasyMetadata({ data: "json, name=Framerate" })
  framerate?: number;

  @SpeakeasyMetadata({ data: "json, name=Height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=IsAudioDirect" })
  isAudioDirect?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsVideoDirect" })
  isVideoDirect?: boolean;

  @SpeakeasyMetadata({ data: "json, name=TranscodeReasons" })
  transcodeReasons?: TranscodeReasonEnum[];

  @SpeakeasyMetadata({ data: "json, name=VideoCodec" })
  videoCodec?: string;

  @SpeakeasyMetadata({ data: "json, name=Width" })
  width?: number;
}
