import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PlayMethodEnum } from "./playmethodenum";
import { RepeatModeEnum } from "./repeatmodeenum";


export class PlayerStateInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=AudioStreamIndex" })
  audioStreamIndex?: number;

  @Metadata({ data: "json, name=CanSeek" })
  canSeek?: boolean;

  @Metadata({ data: "json, name=IsMuted" })
  isMuted?: boolean;

  @Metadata({ data: "json, name=IsPaused" })
  isPaused?: boolean;

  @Metadata({ data: "json, name=MediaSourceId" })
  mediaSourceId?: string;

  @Metadata({ data: "json, name=PlayMethod" })
  playMethod?: PlayMethodEnum;

  @Metadata({ data: "json, name=PositionTicks" })
  positionTicks?: number;

  @Metadata({ data: "json, name=RepeatMode" })
  repeatMode?: RepeatModeEnum;

  @Metadata({ data: "json, name=SubtitleStreamIndex" })
  subtitleStreamIndex?: number;

  @Metadata({ data: "json, name=VolumeLevel" })
  volumeLevel?: number;
}
