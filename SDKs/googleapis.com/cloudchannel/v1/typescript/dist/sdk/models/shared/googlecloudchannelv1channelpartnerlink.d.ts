import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1CloudIdentityInfoInput } from "./googlecloudchannelv1cloudidentityinfo";
import { GoogleCloudChannelV1CloudIdentityInfo } from "./googlecloudchannelv1cloudidentityinfo";
export declare enum GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum {
    ChannelPartnerLinkStateUnspecified = "CHANNEL_PARTNER_LINK_STATE_UNSPECIFIED",
    Invited = "INVITED",
    Active = "ACTIVE",
    Revoked = "REVOKED",
    Suspended = "SUSPENDED"
}
/**
 * Entity representing a link between distributors and their indirect resellers in an n-tier resale channel.
**/
export declare class GoogleCloudChannelV1ChannelPartnerLinkInput extends SpeakeasyBase {
    channelPartnerCloudIdentityInfo?: GoogleCloudChannelV1CloudIdentityInfoInput;
    linkState?: GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum;
    resellerCloudIdentityId?: string;
}
/**
 * Entity representing a link between distributors and their indirect resellers in an n-tier resale channel.
**/
export declare class GoogleCloudChannelV1ChannelPartnerLink extends SpeakeasyBase {
    channelPartnerCloudIdentityInfo?: GoogleCloudChannelV1CloudIdentityInfo;
    createTime?: string;
    inviteLinkUri?: string;
    linkState?: GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum;
    name?: string;
    publicId?: string;
    resellerCloudIdentityId?: string;
    updateTime?: string;
}
