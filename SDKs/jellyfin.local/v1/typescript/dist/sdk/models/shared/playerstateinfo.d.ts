import { SpeakeasyBase } from "../../../internal/utils";
import { PlayMethodEnum } from "./playmethodenum";
import { RepeatModeEnum } from "./repeatmodeenum";
export declare class PlayerStateInfo extends SpeakeasyBase {
    audioStreamIndex?: number;
    canSeek?: boolean;
    isMuted?: boolean;
    isPaused?: boolean;
    mediaSourceId?: string;
    playMethod?: PlayMethodEnum;
    positionTicks?: number;
    repeatMode?: RepeatModeEnum;
    subtitleStreamIndex?: number;
    volumeLevel?: number;
}
