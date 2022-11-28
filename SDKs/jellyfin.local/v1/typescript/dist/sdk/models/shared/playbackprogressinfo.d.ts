import { SpeakeasyBase } from "../../../internal/utils";
import { BaseItemDtoInput } from "./baseitemdto";
import { QueueItem } from "./queueitem";
import { PlayMethodEnum } from "./playmethodenum";
import { RepeatModeEnum } from "./repeatmodeenum";
/**
 * Class PlaybackProgressInfo.
**/
export declare class PlaybackProgressInfoInput extends SpeakeasyBase {
    aspectRatio?: string;
    audioStreamIndex?: number;
    brightness?: number;
    canSeek?: boolean;
    isMuted?: boolean;
    isPaused?: boolean;
    item?: BaseItemDtoInput;
    itemId?: string;
    liveStreamId?: string;
    mediaSourceId?: string;
    nowPlayingQueue?: QueueItem[];
    playMethod?: PlayMethodEnum;
    playSessionId?: string;
    playbackStartTimeTicks?: number;
    playlistItemId?: string;
    positionTicks?: number;
    repeatMode?: RepeatModeEnum;
    sessionId?: string;
    subtitleStreamIndex?: number;
    volumeLevel?: number;
}
