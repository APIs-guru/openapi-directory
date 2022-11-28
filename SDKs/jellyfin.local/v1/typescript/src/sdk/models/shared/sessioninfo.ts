import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SessionUserInfo } from "./sessionuserinfo";
import { ClientCapabilities } from "./clientcapabilities";
import { BaseItem } from "./baseitem";
import { BaseItemDto } from "./baseitemdto";
import { QueueItem } from "./queueitem";
import { PlayerStateInfo } from "./playerstateinfo";
import { GeneralCommandTypeEnum } from "./generalcommandtypeenum";
import { TranscodingInfo } from "./transcodinginfo";



// SessionInfo
/** 
 * Class SessionInfo.
**/
export class SessionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdditionalUsers", elemType: SessionUserInfo })
  additionalUsers?: SessionUserInfo[];

  @SpeakeasyMetadata({ data: "json, name=ApplicationVersion" })
  applicationVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Capabilities" })
  capabilities?: ClientCapabilities;

  @SpeakeasyMetadata({ data: "json, name=Client" })
  client?: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceId" })
  deviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceName" })
  deviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceType" })
  deviceType?: string;

  @SpeakeasyMetadata({ data: "json, name=FullNowPlayingItem" })
  fullNowPlayingItem?: BaseItem;

  @SpeakeasyMetadata({ data: "json, name=HasCustomDeviceName" })
  hasCustomDeviceName?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=IsActive" })
  isActive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LastActivityDate" })
  lastActivityDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastPlaybackCheckIn" })
  lastPlaybackCheckIn?: Date;

  @SpeakeasyMetadata({ data: "json, name=NowPlayingItem" })
  nowPlayingItem?: BaseItemDto;

  @SpeakeasyMetadata({ data: "json, name=NowPlayingQueue", elemType: QueueItem })
  nowPlayingQueue?: QueueItem[];

  @SpeakeasyMetadata({ data: "json, name=NowViewingItem" })
  nowViewingItem?: BaseItemDto;

  @SpeakeasyMetadata({ data: "json, name=PlayState" })
  playState?: PlayerStateInfo;

  @SpeakeasyMetadata({ data: "json, name=PlayableMediaTypes" })
  playableMediaTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=PlaylistItemId" })
  playlistItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=RemoteEndPoint" })
  remoteEndPoint?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerId" })
  serverId?: string;

  @SpeakeasyMetadata({ data: "json, name=SupportedCommands" })
  supportedCommands?: GeneralCommandTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=SupportsMediaControl" })
  supportsMediaControl?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SupportsRemoteControl" })
  supportsRemoteControl?: boolean;

  @SpeakeasyMetadata({ data: "json, name=TranscodingInfo" })
  transcodingInfo?: TranscodingInfo;

  @SpeakeasyMetadata({ data: "json, name=UserId" })
  userId?: string;

  @SpeakeasyMetadata({ data: "json, name=UserName" })
  userName?: string;

  @SpeakeasyMetadata({ data: "json, name=UserPrimaryImageTag" })
  userPrimaryImageTag?: string;
}
