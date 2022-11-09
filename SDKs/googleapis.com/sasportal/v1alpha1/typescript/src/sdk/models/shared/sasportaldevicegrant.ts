import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SasPortalFrequencyRange } from "./sasportalfrequencyrange";
import { SasPortalDpaMoveList } from "./sasportaldpamovelist";

export enum SasPortalDeviceGrantChannelTypeEnum {
    ChannelTypeUnspecified = "CHANNEL_TYPE_UNSPECIFIED"
,    ChannelTypeGaa = "CHANNEL_TYPE_GAA"
,    ChannelTypePal = "CHANNEL_TYPE_PAL"
}

export enum SasPortalDeviceGrantStateEnum {
    GrantStateUnspecified = "GRANT_STATE_UNSPECIFIED"
,    GrantStateGranted = "GRANT_STATE_GRANTED"
,    GrantStateTerminated = "GRANT_STATE_TERMINATED"
,    GrantStateSuspended = "GRANT_STATE_SUSPENDED"
,    GrantStateAuthorized = "GRANT_STATE_AUTHORIZED"
,    GrantStateExpired = "GRANT_STATE_EXPIRED"
}


// SasPortalDeviceGrant
/** 
 * Device grant. It is an authorization provided by the Spectrum Access System to a device to transmit using specified operating parameters after a successful heartbeat by the device.
**/
export class SasPortalDeviceGrant extends SpeakeasyBase {
  @Metadata({ data: "json, name=channelType" })
  channelType?: SasPortalDeviceGrantChannelTypeEnum;

  @Metadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @Metadata({ data: "json, name=frequencyRange" })
  frequencyRange?: SasPortalFrequencyRange;

  @Metadata({ data: "json, name=grantId" })
  grantId?: string;

  @Metadata({ data: "json, name=lastHeartbeatTransmitExpireTime" })
  lastHeartbeatTransmitExpireTime?: string;

  @Metadata({ data: "json, name=maxEirp" })
  maxEirp?: number;

  @Metadata({ data: "json, name=moveList", elemType: shared.SasPortalDpaMoveList })
  moveList?: SasPortalDpaMoveList[];

  @Metadata({ data: "json, name=state" })
  state?: SasPortalDeviceGrantStateEnum;

  @Metadata({ data: "json, name=suspensionReason" })
  suspensionReason?: string[];
}
