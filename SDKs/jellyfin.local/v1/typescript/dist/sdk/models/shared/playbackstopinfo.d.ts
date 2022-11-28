import { SpeakeasyBase } from "../../../internal/utils";
import { BaseItemDtoInput } from "./baseitemdto";
import { QueueItem } from "./queueitem";
/**
 * Class PlaybackStopInfo.
**/
export declare class PlaybackStopInfoInput extends SpeakeasyBase {
    failed?: boolean;
    item?: BaseItemDtoInput;
    itemId?: string;
    liveStreamId?: string;
    mediaSourceId?: string;
    nextMediaType?: string;
    nowPlayingQueue?: QueueItem[];
    playSessionId?: string;
    playlistItemId?: string;
    positionTicks?: number;
    sessionId?: string;
}
