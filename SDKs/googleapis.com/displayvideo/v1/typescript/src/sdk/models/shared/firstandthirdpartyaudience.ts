import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContactInfoList } from "./contactinfolist";
import { MobileDeviceIdList } from "./mobiledeviceidlist";

export enum FirstAndThirdPartyAudienceAudienceSourceEnum {
    AudienceSourceUnspecified = "AUDIENCE_SOURCE_UNSPECIFIED"
,    DisplayVideo360 = "DISPLAY_VIDEO_360"
,    CampaignManager = "CAMPAIGN_MANAGER"
,    AdManager = "AD_MANAGER"
,    SearchAds360 = "SEARCH_ADS_360"
,    Youtube = "YOUTUBE"
,    AdsDataHub = "ADS_DATA_HUB"
}

export enum FirstAndThirdPartyAudienceAudienceTypeEnum {
    AudienceTypeUnspecified = "AUDIENCE_TYPE_UNSPECIFIED"
,    CustomerMatchContactInfo = "CUSTOMER_MATCH_CONTACT_INFO"
,    CustomerMatchDeviceId = "CUSTOMER_MATCH_DEVICE_ID"
,    CustomerMatchUserId = "CUSTOMER_MATCH_USER_ID"
,    ActivityBased = "ACTIVITY_BASED"
,    FrequencyCap = "FREQUENCY_CAP"
,    TagBased = "TAG_BASED"
,    YoutubeUsers = "YOUTUBE_USERS"
,    Licensed = "LICENSED"
}

export enum FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnum {
    FirstAndThirdPartyAudienceTypeUnspecified = "FIRST_AND_THIRD_PARTY_AUDIENCE_TYPE_UNSPECIFIED"
,    FirstAndThirdPartyAudienceTypeFirstParty = "FIRST_AND_THIRD_PARTY_AUDIENCE_TYPE_FIRST_PARTY"
,    FirstAndThirdPartyAudienceTypeThirdParty = "FIRST_AND_THIRD_PARTY_AUDIENCE_TYPE_THIRD_PARTY"
}


// FirstAndThirdPartyAudience
/** 
 * Describes a first or third party audience list used for targeting. First party audiences are created via usage of client data. Third party audiences are provided by Third Party data providers and can only be licensed to customers.
**/
export class FirstAndThirdPartyAudience extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeDisplayAudienceSize" })
  activeDisplayAudienceSize?: string;

  @Metadata({ data: "json, name=appId" })
  appId?: string;

  @Metadata({ data: "json, name=audienceSource" })
  audienceSource?: FirstAndThirdPartyAudienceAudienceSourceEnum;

  @Metadata({ data: "json, name=audienceType" })
  audienceType?: FirstAndThirdPartyAudienceAudienceTypeEnum;

  @Metadata({ data: "json, name=contactInfoList" })
  contactInfoList?: ContactInfoList;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayAudienceSize" })
  displayAudienceSize?: string;

  @Metadata({ data: "json, name=displayDesktopAudienceSize" })
  displayDesktopAudienceSize?: string;

  @Metadata({ data: "json, name=displayMobileAppAudienceSize" })
  displayMobileAppAudienceSize?: string;

  @Metadata({ data: "json, name=displayMobileWebAudienceSize" })
  displayMobileWebAudienceSize?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=firstAndThirdPartyAudienceId" })
  firstAndThirdPartyAudienceId?: string;

  @Metadata({ data: "json, name=firstAndThirdPartyAudienceType" })
  firstAndThirdPartyAudienceType?: FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnum;

  @Metadata({ data: "json, name=gmailAudienceSize" })
  gmailAudienceSize?: string;

  @Metadata({ data: "json, name=membershipDurationDays" })
  membershipDurationDays?: string;

  @Metadata({ data: "json, name=mobileDeviceIdList" })
  mobileDeviceIdList?: MobileDeviceIdList;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=youtubeAudienceSize" })
  youtubeAudienceSize?: string;
}
