import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BaseItemDto } from "./baseitemdto";
import { QueueItem } from "./queueitem";


// PlaybackStopInfo
/** 
 * Class PlaybackStopInfo.
**/
export class PlaybackStopInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=Failed" })
  failed?: boolean;

  @Metadata({ data: "json, name=Item" })
  item?: BaseItemDto;

  @Metadata({ data: "json, name=ItemId" })
  itemId?: string;

  @Metadata({ data: "json, name=LiveStreamId" })
  liveStreamId?: string;

  @Metadata({ data: "json, name=MediaSourceId" })
  mediaSourceId?: string;

  @Metadata({ data: "json, name=NextMediaType" })
  nextMediaType?: string;

  @Metadata({ data: "json, name=NowPlayingQueue", elemType: shared.QueueItem })
  nowPlayingQueue?: QueueItem[];

  @Metadata({ data: "json, name=PlaySessionId" })
  playSessionId?: string;

  @Metadata({ data: "json, name=PlaylistItemId" })
  playlistItemId?: string;

  @Metadata({ data: "json, name=PositionTicks" })
  positionTicks?: number;

  @Metadata({ data: "json, name=SessionId" })
  sessionId?: string;
}
