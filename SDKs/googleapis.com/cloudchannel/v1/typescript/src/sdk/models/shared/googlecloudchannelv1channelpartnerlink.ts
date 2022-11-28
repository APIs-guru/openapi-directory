import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1CloudIdentityInfoInput } from "./googlecloudchannelv1cloudidentityinfo";
import { GoogleCloudChannelV1CloudIdentityInfo } from "./googlecloudchannelv1cloudidentityinfo";


export enum GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum {
    ChannelPartnerLinkStateUnspecified = "CHANNEL_PARTNER_LINK_STATE_UNSPECIFIED",
    Invited = "INVITED",
    Active = "ACTIVE",
    Revoked = "REVOKED",
    Suspended = "SUSPENDED"
}


// GoogleCloudChannelV1ChannelPartnerLinkInput
/** 
 * Entity representing a link between distributors and their indirect resellers in an n-tier resale channel.
**/
export class GoogleCloudChannelV1ChannelPartnerLinkInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelPartnerCloudIdentityInfo" })
  channelPartnerCloudIdentityInfo?: GoogleCloudChannelV1CloudIdentityInfoInput;

  @SpeakeasyMetadata({ data: "json, name=linkState" })
  linkState?: GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum;

  @SpeakeasyMetadata({ data: "json, name=resellerCloudIdentityId" })
  resellerCloudIdentityId?: string;
}


// GoogleCloudChannelV1ChannelPartnerLink
/** 
 * Entity representing a link between distributors and their indirect resellers in an n-tier resale channel.
**/
export class GoogleCloudChannelV1ChannelPartnerLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelPartnerCloudIdentityInfo" })
  channelPartnerCloudIdentityInfo?: GoogleCloudChannelV1CloudIdentityInfo;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=inviteLinkUri" })
  inviteLinkUri?: string;

  @SpeakeasyMetadata({ data: "json, name=linkState" })
  linkState?: GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=publicId" })
  publicId?: string;

  @SpeakeasyMetadata({ data: "json, name=resellerCloudIdentityId" })
  resellerCloudIdentityId?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
