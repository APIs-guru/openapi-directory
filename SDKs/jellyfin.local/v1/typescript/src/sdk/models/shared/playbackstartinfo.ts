import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BaseItemDto } from "./baseitemdto";
import { QueueItem } from "./queueitem";
import { PlayMethodEnum } from "./playmethodenum";
import { RepeatModeEnum } from "./repeatmodeenum";


// PlaybackStartInfo
/** 
 * Class PlaybackStartInfo.
**/
export class PlaybackStartInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=AspectRatio" })
  aspectRatio?: string;

  @Metadata({ data: "json, name=AudioStreamIndex" })
  audioStreamIndex?: number;

  @Metadata({ data: "json, name=Brightness" })
  brightness?: number;

  @Metadata({ data: "json, name=CanSeek" })
  canSeek?: boolean;

  @Metadata({ data: "json, name=IsMuted" })
  isMuted?: boolean;

  @Metadata({ data: "json, name=IsPaused" })
  isPaused?: boolean;

  @Metadata({ data: "json, name=Item" })
  item?: BaseItemDto;

  @Metadata({ data: "json, name=ItemId" })
  itemId?: string;

  @Metadata({ data: "json, name=LiveStreamId" })
  liveStreamId?: string;

  @Metadata({ data: "json, name=MediaSourceId" })
  mediaSourceId?: string;

  @Metadata({ data: "json, name=NowPlayingQueue", elemType: shared.QueueItem })
  nowPlayingQueue?: QueueItem[];

  @Metadata({ data: "json, name=PlayMethod" })
  playMethod?: PlayMethodEnum;

  @Metadata({ data: "json, name=PlaySessionId" })
  playSessionId?: string;

  @Metadata({ data: "json, name=PlaybackStartTimeTicks" })
  playbackStartTimeTicks?: number;

  @Metadata({ data: "json, name=PlaylistItemId" })
  playlistItemId?: string;

  @Metadata({ data: "json, name=PositionTicks" })
  positionTicks?: number;

  @Metadata({ data: "json, name=RepeatMode" })
  repeatMode?: RepeatModeEnum;

  @Metadata({ data: "json, name=SessionId" })
  sessionId?: string;

  @Metadata({ data: "json, name=SubtitleStreamIndex" })
  subtitleStreamIndex?: number;

  @Metadata({ data: "json, name=VolumeLevel" })
  volumeLevel?: number;
}
