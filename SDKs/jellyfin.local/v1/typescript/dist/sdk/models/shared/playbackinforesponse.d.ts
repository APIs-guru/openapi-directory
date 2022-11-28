import { SpeakeasyBase } from "../../../internal/utils";
import { PlaybackErrorCodeEnum } from "./playbackerrorcodeenum";
import { MediaSourceInfo } from "./mediasourceinfo";
/**
 * Class PlaybackInfoResponse.
**/
export declare class PlaybackInfoResponse extends SpeakeasyBase {
    errorCode?: PlaybackErrorCodeEnum;
    mediaSources?: MediaSourceInfo[];
    playSessionId?: string;
}
