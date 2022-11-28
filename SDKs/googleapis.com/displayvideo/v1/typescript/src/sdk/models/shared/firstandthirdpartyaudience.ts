import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContactInfoList } from "./contactinfolist";
import { MobileDeviceIdList } from "./mobiledeviceidlist";


export enum FirstAndThirdPartyAudienceAudienceSourceEnum {
    AudienceSourceUnspecified = "AUDIENCE_SOURCE_UNSPECIFIED",
    DisplayVideo360 = "DISPLAY_VIDEO_360",
    CampaignManager = "CAMPAIGN_MANAGER",
    AdManager = "AD_MANAGER",
    SearchAds360 = "SEARCH_ADS_360",
    Youtube = "YOUTUBE",
    AdsDataHub = "ADS_DATA_HUB"
}

export enum FirstAndThirdPartyAudienceAudienceTypeEnum {
    AudienceTypeUnspecified = "AUDIENCE_TYPE_UNSPECIFIED",
    CustomerMatchContactInfo = "CUSTOMER_MATCH_CONTACT_INFO",
    CustomerMatchDeviceId = "CUSTOMER_MATCH_DEVICE_ID",
    CustomerMatchUserId = "CUSTOMER_MATCH_USER_ID",
    ActivityBased = "ACTIVITY_BASED",
    FrequencyCap = "FREQUENCY_CAP",
    TagBased = "TAG_BASED",
    YoutubeUsers = "YOUTUBE_USERS",
    Licensed = "LICENSED"
}

export enum FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnum {
    FirstAndThirdPartyAudienceTypeUnspecified = "FIRST_AND_THIRD_PARTY_AUDIENCE_TYPE_UNSPECIFIED",
    FirstAndThirdPartyAudienceTypeFirstParty = "FIRST_AND_THIRD_PARTY_AUDIENCE_TYPE_FIRST_PARTY",
    FirstAndThirdPartyAudienceTypeThirdParty = "FIRST_AND_THIRD_PARTY_AUDIENCE_TYPE_THIRD_PARTY"
}


// FirstAndThirdPartyAudience
/** 
 * Describes a first or third party audience list used for targeting. First party audiences are created via usage of client data. Third party audiences are provided by Third Party data providers and can only be licensed to customers.
**/
export class FirstAndThirdPartyAudience extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeDisplayAudienceSize" })
  activeDisplayAudienceSize?: string;

  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=audienceSource" })
  audienceSource?: FirstAndThirdPartyAudienceAudienceSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=audienceType" })
  audienceType?: FirstAndThirdPartyAudienceAudienceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=contactInfoList" })
  contactInfoList?: ContactInfoList;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayAudienceSize" })
  displayAudienceSize?: string;

  @SpeakeasyMetadata({ data: "json, name=displayDesktopAudienceSize" })
  displayDesktopAudienceSize?: string;

  @SpeakeasyMetadata({ data: "json, name=displayMobileAppAudienceSize" })
  displayMobileAppAudienceSize?: string;

  @SpeakeasyMetadata({ data: "json, name=displayMobileWebAudienceSize" })
  displayMobileWebAudienceSize?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=firstAndThirdPartyAudienceId" })
  firstAndThirdPartyAudienceId?: string;

  @SpeakeasyMetadata({ data: "json, name=firstAndThirdPartyAudienceType" })
  firstAndThirdPartyAudienceType?: FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=gmailAudienceSize" })
  gmailAudienceSize?: string;

  @SpeakeasyMetadata({ data: "json, name=membershipDurationDays" })
  membershipDurationDays?: string;

  @SpeakeasyMetadata({ data: "json, name=mobileDeviceIdList" })
  mobileDeviceIdList?: MobileDeviceIdList;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=youtubeAudienceSize" })
  youtubeAudienceSize?: string;
}


// FirstAndThirdPartyAudienceInput
/** 
 * Describes a first or third party audience list used for targeting. First party audiences are created via usage of client data. Third party audiences are provided by Third Party data providers and can only be licensed to customers.
**/
export class FirstAndThirdPartyAudienceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=audienceType" })
  audienceType?: FirstAndThirdPartyAudienceAudienceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=contactInfoList" })
  contactInfoList?: ContactInfoList;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=firstAndThirdPartyAudienceType" })
  firstAndThirdPartyAudienceType?: FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=membershipDurationDays" })
  membershipDurationDays?: string;

  @SpeakeasyMetadata({ data: "json, name=mobileDeviceIdList" })
  mobileDeviceIdList?: MobileDeviceIdList;
}
