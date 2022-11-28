import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BaseItemDtoInput } from "./baseitemdto";
import { QueueItem } from "./queueitem";



// PlaybackStopInfoInput
/** 
 * Class PlaybackStopInfo.
**/
export class PlaybackStopInfoInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Failed" })
  failed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Item" })
  item?: BaseItemDtoInput;

  @SpeakeasyMetadata({ data: "json, name=ItemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=LiveStreamId" })
  liveStreamId?: string;

  @SpeakeasyMetadata({ data: "json, name=MediaSourceId" })
  mediaSourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=NextMediaType" })
  nextMediaType?: string;

  @SpeakeasyMetadata({ data: "json, name=NowPlayingQueue", elemType: QueueItem })
  nowPlayingQueue?: QueueItem[];

  @SpeakeasyMetadata({ data: "json, name=PlaySessionId" })
  playSessionId?: string;

  @SpeakeasyMetadata({ data: "json, name=PlaylistItemId" })
  playlistItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=PositionTicks" })
  positionTicks?: number;

  @SpeakeasyMetadata({ data: "json, name=SessionId" })
  sessionId?: string;
}
