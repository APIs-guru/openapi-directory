import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BaseItemDtoInput } from "./baseitemdto";
import { QueueItem } from "./queueitem";
import { PlayMethodEnum } from "./playmethodenum";
import { RepeatModeEnum } from "./repeatmodeenum";



// PlaybackStartInfoInput
/** 
 * Class PlaybackStartInfo.
**/
export class PlaybackStartInfoInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AspectRatio" })
  aspectRatio?: string;

  @SpeakeasyMetadata({ data: "json, name=AudioStreamIndex" })
  audioStreamIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=Brightness" })
  brightness?: number;

  @SpeakeasyMetadata({ data: "json, name=CanSeek" })
  canSeek?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsMuted" })
  isMuted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsPaused" })
  isPaused?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Item" })
  item?: BaseItemDtoInput;

  @SpeakeasyMetadata({ data: "json, name=ItemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=LiveStreamId" })
  liveStreamId?: string;

  @SpeakeasyMetadata({ data: "json, name=MediaSourceId" })
  mediaSourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=NowPlayingQueue", elemType: QueueItem })
  nowPlayingQueue?: QueueItem[];

  @SpeakeasyMetadata({ data: "json, name=PlayMethod" })
  playMethod?: PlayMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=PlaySessionId" })
  playSessionId?: string;

  @SpeakeasyMetadata({ data: "json, name=PlaybackStartTimeTicks" })
  playbackStartTimeTicks?: number;

  @SpeakeasyMetadata({ data: "json, name=PlaylistItemId" })
  playlistItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=PositionTicks" })
  positionTicks?: number;

  @SpeakeasyMetadata({ data: "json, name=RepeatMode" })
  repeatMode?: RepeatModeEnum;

  @SpeakeasyMetadata({ data: "json, name=SessionId" })
  sessionId?: string;

  @SpeakeasyMetadata({ data: "json, name=SubtitleStreamIndex" })
  subtitleStreamIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=VolumeLevel" })
  volumeLevel?: number;
}
