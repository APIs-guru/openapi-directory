import { SpeakeasyBase } from "../../../internal/utils";
import { SessionUserInfo } from "./sessionuserinfo";
import { ClientCapabilities } from "./clientcapabilities";
import { BaseItem } from "./baseitem";
import { BaseItemDto } from "./baseitemdto";
import { QueueItem } from "./queueitem";
import { PlayerStateInfo } from "./playerstateinfo";
import { GeneralCommandTypeEnum } from "./generalcommandtypeenum";
import { TranscodingInfo } from "./transcodinginfo";
/**
 * Class SessionInfo.
**/
export declare class SessionInfo extends SpeakeasyBase {
    additionalUsers?: SessionUserInfo[];
    applicationVersion?: string;
    capabilities?: ClientCapabilities;
    client?: string;
    deviceId?: string;
    deviceName?: string;
    deviceType?: string;
    fullNowPlayingItem?: BaseItem;
    hasCustomDeviceName?: boolean;
    id?: string;
    isActive?: boolean;
    lastActivityDate?: Date;
    lastPlaybackCheckIn?: Date;
    nowPlayingItem?: BaseItemDto;
    nowPlayingQueue?: QueueItem[];
    nowViewingItem?: BaseItemDto;
    playState?: PlayerStateInfo;
    playableMediaTypes?: string[];
    playlistItemId?: string;
    remoteEndPoint?: string;
    serverId?: string;
    supportedCommands?: GeneralCommandTypeEnum[];
    supportsMediaControl?: boolean;
    supportsRemoteControl?: boolean;
    transcodingInfo?: TranscodingInfo;
    userId?: string;
    userName?: string;
    userPrimaryImageTag?: string;
}
