import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudChannelV1CloudIdentityInfo } from "./googlecloudchannelv1cloudidentityinfo";

export enum GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum {
    ChannelPartnerLinkStateUnspecified = "CHANNEL_PARTNER_LINK_STATE_UNSPECIFIED"
,    Invited = "INVITED"
,    Active = "ACTIVE"
,    Revoked = "REVOKED"
,    Suspended = "SUSPENDED"
}


// GoogleCloudChannelV1ChannelPartnerLink
/** 
 * Entity representing a link between distributors and their indirect resellers in an n-tier resale channel.
**/
export class GoogleCloudChannelV1ChannelPartnerLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=channelPartnerCloudIdentityInfo" })
  channelPartnerCloudIdentityInfo?: GoogleCloudChannelV1CloudIdentityInfo;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=inviteLinkUri" })
  inviteLinkUri?: string;

  @Metadata({ data: "json, name=linkState" })
  linkState?: GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=publicId" })
  publicId?: string;

  @Metadata({ data: "json, name=resellerCloudIdentityId" })
  resellerCloudIdentityId?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
