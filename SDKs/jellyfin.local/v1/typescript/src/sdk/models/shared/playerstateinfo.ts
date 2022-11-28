import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlayMethodEnum } from "./playmethodenum";
import { RepeatModeEnum } from "./repeatmodeenum";



export class PlayerStateInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AudioStreamIndex" })
  audioStreamIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=CanSeek" })
  canSeek?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsMuted" })
  isMuted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsPaused" })
  isPaused?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MediaSourceId" })
  mediaSourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=PlayMethod" })
  playMethod?: PlayMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=PositionTicks" })
  positionTicks?: number;

  @SpeakeasyMetadata({ data: "json, name=RepeatMode" })
  repeatMode?: RepeatModeEnum;

  @SpeakeasyMetadata({ data: "json, name=SubtitleStreamIndex" })
  subtitleStreamIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=VolumeLevel" })
  volumeLevel?: number;
}
