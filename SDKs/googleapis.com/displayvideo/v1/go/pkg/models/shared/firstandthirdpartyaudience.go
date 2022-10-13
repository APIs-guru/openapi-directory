package shared

type FirstAndThirdPartyAudienceAudienceSourceEnum string

const (
	FirstAndThirdPartyAudienceAudienceSourceEnumAudienceSourceUnspecified FirstAndThirdPartyAudienceAudienceSourceEnum = "AUDIENCE_SOURCE_UNSPECIFIED"
	FirstAndThirdPartyAudienceAudienceSourceEnumDisplayVideo360           FirstAndThirdPartyAudienceAudienceSourceEnum = "DISPLAY_VIDEO_360"
	FirstAndThirdPartyAudienceAudienceSourceEnumCampaignManager           FirstAndThirdPartyAudienceAudienceSourceEnum = "CAMPAIGN_MANAGER"
	FirstAndThirdPartyAudienceAudienceSourceEnumAdManager                 FirstAndThirdPartyAudienceAudienceSourceEnum = "AD_MANAGER"
	FirstAndThirdPartyAudienceAudienceSourceEnumSearchAds360              FirstAndThirdPartyAudienceAudienceSourceEnum = "SEARCH_ADS_360"
	FirstAndThirdPartyAudienceAudienceSourceEnumYoutube                   FirstAndThirdPartyAudienceAudienceSourceEnum = "YOUTUBE"
	FirstAndThirdPartyAudienceAudienceSourceEnumAdsDataHub                FirstAndThirdPartyAudienceAudienceSourceEnum = "ADS_DATA_HUB"
)

type FirstAndThirdPartyAudienceAudienceTypeEnum string

const (
	FirstAndThirdPartyAudienceAudienceTypeEnumAudienceTypeUnspecified  FirstAndThirdPartyAudienceAudienceTypeEnum = "AUDIENCE_TYPE_UNSPECIFIED"
	FirstAndThirdPartyAudienceAudienceTypeEnumCustomerMatchContactInfo FirstAndThirdPartyAudienceAudienceTypeEnum = "CUSTOMER_MATCH_CONTACT_INFO"
	FirstAndThirdPartyAudienceAudienceTypeEnumCustomerMatchDeviceID    FirstAndThirdPartyAudienceAudienceTypeEnum = "CUSTOMER_MATCH_DEVICE_ID"
	FirstAndThirdPartyAudienceAudienceTypeEnumCustomerMatchUserID      FirstAndThirdPartyAudienceAudienceTypeEnum = "CUSTOMER_MATCH_USER_ID"
	FirstAndThirdPartyAudienceAudienceTypeEnumActivityBased            FirstAndThirdPartyAudienceAudienceTypeEnum = "ACTIVITY_BASED"
	FirstAndThirdPartyAudienceAudienceTypeEnumFrequencyCap             FirstAndThirdPartyAudienceAudienceTypeEnum = "FREQUENCY_CAP"
	FirstAndThirdPartyAudienceAudienceTypeEnumTagBased                 FirstAndThirdPartyAudienceAudienceTypeEnum = "TAG_BASED"
	FirstAndThirdPartyAudienceAudienceTypeEnumYoutubeUsers             FirstAndThirdPartyAudienceAudienceTypeEnum = "YOUTUBE_USERS"
	FirstAndThirdPartyAudienceAudienceTypeEnumLicensed                 FirstAndThirdPartyAudienceAudienceTypeEnum = "LICENSED"
)

type FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnum string

const (
	FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnumFirstAndThirdPartyAudienceTypeUnspecified FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnum = "FIRST_AND_THIRD_PARTY_AUDIENCE_TYPE_UNSPECIFIED"
	FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnumFirstAndThirdPartyAudienceTypeFirstParty  FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnum = "FIRST_AND_THIRD_PARTY_AUDIENCE_TYPE_FIRST_PARTY"
	FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnumFirstAndThirdPartyAudienceTypeThirdParty  FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnum = "FIRST_AND_THIRD_PARTY_AUDIENCE_TYPE_THIRD_PARTY"
)

type FirstAndThirdPartyAudience struct {
	ActiveDisplayAudienceSize      *string                                                       `json:"activeDisplayAudienceSize"`
	AppID                          *string                                                       `json:"appId"`
	AudienceSource                 *FirstAndThirdPartyAudienceAudienceSourceEnum                 `json:"audienceSource"`
	AudienceType                   *FirstAndThirdPartyAudienceAudienceTypeEnum                   `json:"audienceType"`
	ContactInfoList                *ContactInfoList                                              `json:"contactInfoList"`
	Description                    *string                                                       `json:"description"`
	DisplayAudienceSize            *string                                                       `json:"displayAudienceSize"`
	DisplayDesktopAudienceSize     *string                                                       `json:"displayDesktopAudienceSize"`
	DisplayMobileAppAudienceSize   *string                                                       `json:"displayMobileAppAudienceSize"`
	DisplayMobileWebAudienceSize   *string                                                       `json:"displayMobileWebAudienceSize"`
	DisplayName                    *string                                                       `json:"displayName"`
	FirstAndThirdPartyAudienceID   *string                                                       `json:"firstAndThirdPartyAudienceId"`
	FirstAndThirdPartyAudienceType *FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnum `json:"firstAndThirdPartyAudienceType"`
	GmailAudienceSize              *string                                                       `json:"gmailAudienceSize"`
	MembershipDurationDays         *string                                                       `json:"membershipDurationDays"`
	MobileDeviceIDList             *MobileDeviceIDList                                           `json:"mobileDeviceIdList"`
	Name                           *string                                                       `json:"name"`
	YoutubeAudienceSize            *string                                                       `json:"youtubeAudienceSize"`
}
