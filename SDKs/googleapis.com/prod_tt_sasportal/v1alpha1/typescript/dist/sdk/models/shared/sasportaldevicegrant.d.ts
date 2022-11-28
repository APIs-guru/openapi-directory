import { SpeakeasyBase } from "../../../internal/utils";
import { SasPortalFrequencyRange } from "./sasportalfrequencyrange";
import { SasPortalDpaMoveList } from "./sasportaldpamovelist";
export declare enum SasPortalDeviceGrantChannelTypeEnum {
    ChannelTypeUnspecified = "CHANNEL_TYPE_UNSPECIFIED",
    ChannelTypeGaa = "CHANNEL_TYPE_GAA",
    ChannelTypePal = "CHANNEL_TYPE_PAL"
}
export declare enum SasPortalDeviceGrantStateEnum {
    GrantStateUnspecified = "GRANT_STATE_UNSPECIFIED",
    GrantStateGranted = "GRANT_STATE_GRANTED",
    GrantStateTerminated = "GRANT_STATE_TERMINATED",
    GrantStateSuspended = "GRANT_STATE_SUSPENDED",
    GrantStateAuthorized = "GRANT_STATE_AUTHORIZED",
    GrantStateExpired = "GRANT_STATE_EXPIRED"
}
/**
 * Device grant. It is an authorization provided by the Spectrum Access System to a device to transmit using specified operating parameters after a successful heartbeat by the device.
**/
export declare class SasPortalDeviceGrant extends SpeakeasyBase {
    channelType?: SasPortalDeviceGrantChannelTypeEnum;
    expireTime?: string;
    frequencyRange?: SasPortalFrequencyRange;
    grantId?: string;
    lastHeartbeatTransmitExpireTime?: string;
    maxEirp?: number;
    moveList?: SasPortalDpaMoveList[];
    state?: SasPortalDeviceGrantStateEnum;
    suspensionReason?: string[];
}
