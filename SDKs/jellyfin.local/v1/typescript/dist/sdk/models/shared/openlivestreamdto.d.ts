import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceProfile } from "./deviceprofile";
import { MediaProtocolEnum } from "./mediaprotocolenum";
/**
 * Open live stream dto.
**/
export declare class OpenLiveStreamDto extends SpeakeasyBase {
    audioStreamIndex?: number;
    deviceProfile?: DeviceProfile;
    directPlayProtocols?: MediaProtocolEnum[];
    enableDirectPlay?: boolean;
    enableDirectStream?: boolean;
    itemId?: string;
    maxAudioChannels?: number;
    maxStreamingBitrate?: number;
    openToken?: string;
    playSessionId?: string;
    startTimeTicks?: number;
    subtitleStreamIndex?: number;
    userId?: string;
}
