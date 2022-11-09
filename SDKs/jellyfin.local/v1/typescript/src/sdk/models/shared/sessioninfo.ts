import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SessionUserInfo } from "./sessionuserinfo";
import { ClientCapabilities } from "./clientcapabilities";
import { BaseItem } from "./baseitem";
import { BaseItemDto } from "./baseitemdto";
import { QueueItem } from "./queueitem";
import { BaseItemDto } from "./baseitemdto";
import { PlayerStateInfo } from "./playerstateinfo";
import { GeneralCommandTypeEnum } from "./generalcommandtypeenum";
import { TranscodingInfo } from "./transcodinginfo";


// SessionInfo
/** 
 * Class SessionInfo.
**/
export class SessionInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=AdditionalUsers", elemType: shared.SessionUserInfo })
  additionalUsers?: SessionUserInfo[];

  @Metadata({ data: "json, name=ApplicationVersion" })
  applicationVersion?: string;

  @Metadata({ data: "json, name=Capabilities" })
  capabilities?: ClientCapabilities;

  @Metadata({ data: "json, name=Client" })
  client?: string;

  @Metadata({ data: "json, name=DeviceId" })
  deviceId?: string;

  @Metadata({ data: "json, name=DeviceName" })
  deviceName?: string;

  @Metadata({ data: "json, name=DeviceType" })
  deviceType?: string;

  @Metadata({ data: "json, name=FullNowPlayingItem" })
  fullNowPlayingItem?: BaseItem;

  @Metadata({ data: "json, name=HasCustomDeviceName" })
  hasCustomDeviceName?: boolean;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=IsActive" })
  isActive?: boolean;

  @Metadata({ data: "json, name=LastActivityDate" })
  lastActivityDate?: Date;

  @Metadata({ data: "json, name=LastPlaybackCheckIn" })
  lastPlaybackCheckIn?: Date;

  @Metadata({ data: "json, name=NowPlayingItem" })
  nowPlayingItem?: BaseItemDto;

  @Metadata({ data: "json, name=NowPlayingQueue", elemType: shared.QueueItem })
  nowPlayingQueue?: QueueItem[];

  @Metadata({ data: "json, name=NowViewingItem" })
  nowViewingItem?: BaseItemDto;

  @Metadata({ data: "json, name=PlayState" })
  playState?: PlayerStateInfo;

  @Metadata({ data: "json, name=PlayableMediaTypes" })
  playableMediaTypes?: string[];

  @Metadata({ data: "json, name=PlaylistItemId" })
  playlistItemId?: string;

  @Metadata({ data: "json, name=RemoteEndPoint" })
  remoteEndPoint?: string;

  @Metadata({ data: "json, name=ServerId" })
  serverId?: string;

  @Metadata({ data: "json, name=SupportedCommands" })
  supportedCommands?: GeneralCommandTypeEnum[];

  @Metadata({ data: "json, name=SupportsMediaControl" })
  supportsMediaControl?: boolean;

  @Metadata({ data: "json, name=SupportsRemoteControl" })
  supportsRemoteControl?: boolean;

  @Metadata({ data: "json, name=TranscodingInfo" })
  transcodingInfo?: TranscodingInfo;

  @Metadata({ data: "json, name=UserId" })
  userId?: string;

  @Metadata({ data: "json, name=UserName" })
  userName?: string;

  @Metadata({ data: "json, name=UserPrimaryImageTag" })
  userPrimaryImageTag?: string;
}
