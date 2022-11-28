import { SpeakeasyBase } from "../../../internal/utils";
import { ContactInfoList } from "./contactinfolist";
import { MobileDeviceIdList } from "./mobiledeviceidlist";
export declare enum FirstAndThirdPartyAudienceAudienceSourceEnum {
    AudienceSourceUnspecified = "AUDIENCE_SOURCE_UNSPECIFIED",
    DisplayVideo360 = "DISPLAY_VIDEO_360",
    CampaignManager = "CAMPAIGN_MANAGER",
    AdManager = "AD_MANAGER",
    SearchAds360 = "SEARCH_ADS_360",
    Youtube = "YOUTUBE",
    AdsDataHub = "ADS_DATA_HUB"
}
export declare enum FirstAndThirdPartyAudienceAudienceTypeEnum {
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
export declare enum FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnum {
    FirstAndThirdPartyAudienceTypeUnspecified = "FIRST_AND_THIRD_PARTY_AUDIENCE_TYPE_UNSPECIFIED",
    FirstAndThirdPartyAudienceTypeFirstParty = "FIRST_AND_THIRD_PARTY_AUDIENCE_TYPE_FIRST_PARTY",
    FirstAndThirdPartyAudienceTypeThirdParty = "FIRST_AND_THIRD_PARTY_AUDIENCE_TYPE_THIRD_PARTY"
}
/**
 * Describes a first or third party audience list used for targeting. First party audiences are created via usage of client data. Third party audiences are provided by Third Party data providers and can only be licensed to customers.
**/
export declare class FirstAndThirdPartyAudience extends SpeakeasyBase {
    activeDisplayAudienceSize?: string;
    appId?: string;
    audienceSource?: FirstAndThirdPartyAudienceAudienceSourceEnum;
    audienceType?: FirstAndThirdPartyAudienceAudienceTypeEnum;
    contactInfoList?: ContactInfoList;
    description?: string;
    displayAudienceSize?: string;
    displayDesktopAudienceSize?: string;
    displayMobileAppAudienceSize?: string;
    displayMobileWebAudienceSize?: string;
    displayName?: string;
    firstAndThirdPartyAudienceId?: string;
    firstAndThirdPartyAudienceType?: FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnum;
    gmailAudienceSize?: string;
    membershipDurationDays?: string;
    mobileDeviceIdList?: MobileDeviceIdList;
    name?: string;
    youtubeAudienceSize?: string;
}
/**
 * Describes a first or third party audience list used for targeting. First party audiences are created via usage of client data. Third party audiences are provided by Third Party data providers and can only be licensed to customers.
**/
export declare class FirstAndThirdPartyAudienceInput extends SpeakeasyBase {
    appId?: string;
    audienceType?: FirstAndThirdPartyAudienceAudienceTypeEnum;
    contactInfoList?: ContactInfoList;
    description?: string;
    displayName?: string;
    firstAndThirdPartyAudienceType?: FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnum;
    membershipDurationDays?: string;
    mobileDeviceIdList?: MobileDeviceIdList;
}
