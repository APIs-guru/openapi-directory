import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceProfile } from "./deviceprofile";
/**
 * Plabyback info dto.
**/
export declare class PlaybackInfoDto extends SpeakeasyBase {
    allowAudioStreamCopy?: boolean;
    allowVideoStreamCopy?: boolean;
    audioStreamIndex?: number;
    autoOpenLiveStream?: boolean;
    deviceProfile?: DeviceProfile;
    enableDirectPlay?: boolean;
    enableDirectStream?: boolean;
    enableTranscoding?: boolean;
    liveStreamId?: string;
    maxAudioChannels?: number;
    maxStreamingBitrate?: number;
    mediaSourceId?: string;
    startTimeTicks?: number;
    subtitleStreamIndex?: number;
    userId?: string;
}
