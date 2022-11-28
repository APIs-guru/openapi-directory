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

// FirstAndThirdPartyAudience
// Describes a first or third party audience list used for targeting. First party audiences are created via usage of client data. Third party audiences are provided by Third Party data providers and can only be licensed to customers.
type FirstAndThirdPartyAudience struct {
	ActiveDisplayAudienceSize      *string                                                       `json:"activeDisplayAudienceSize,omitempty"`
	AppID                          *string                                                       `json:"appId,omitempty"`
	AudienceSource                 *FirstAndThirdPartyAudienceAudienceSourceEnum                 `json:"audienceSource,omitempty"`
	AudienceType                   *FirstAndThirdPartyAudienceAudienceTypeEnum                   `json:"audienceType,omitempty"`
	ContactInfoList                *ContactInfoList                                              `json:"contactInfoList,omitempty"`
	Description                    *string                                                       `json:"description,omitempty"`
	DisplayAudienceSize            *string                                                       `json:"displayAudienceSize,omitempty"`
	DisplayDesktopAudienceSize     *string                                                       `json:"displayDesktopAudienceSize,omitempty"`
	DisplayMobileAppAudienceSize   *string                                                       `json:"displayMobileAppAudienceSize,omitempty"`
	DisplayMobileWebAudienceSize   *string                                                       `json:"displayMobileWebAudienceSize,omitempty"`
	DisplayName                    *string                                                       `json:"displayName,omitempty"`
	FirstAndThirdPartyAudienceID   *string                                                       `json:"firstAndThirdPartyAudienceId,omitempty"`
	FirstAndThirdPartyAudienceType *FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnum `json:"firstAndThirdPartyAudienceType,omitempty"`
	GmailAudienceSize              *string                                                       `json:"gmailAudienceSize,omitempty"`
	MembershipDurationDays         *string                                                       `json:"membershipDurationDays,omitempty"`
	MobileDeviceIDList             *MobileDeviceIDList                                           `json:"mobileDeviceIdList,omitempty"`
	Name                           *string                                                       `json:"name,omitempty"`
	YoutubeAudienceSize            *string                                                       `json:"youtubeAudienceSize,omitempty"`
}

// FirstAndThirdPartyAudienceInput
// Describes a first or third party audience list used for targeting. First party audiences are created via usage of client data. Third party audiences are provided by Third Party data providers and can only be licensed to customers.
type FirstAndThirdPartyAudienceInput struct {
	AppID                          *string                                                       `json:"appId,omitempty"`
	AudienceType                   *FirstAndThirdPartyAudienceAudienceTypeEnum                   `json:"audienceType,omitempty"`
	ContactInfoList                *ContactInfoList                                              `json:"contactInfoList,omitempty"`
	Description                    *string                                                       `json:"description,omitempty"`
	DisplayName                    *string                                                       `json:"displayName,omitempty"`
	FirstAndThirdPartyAudienceType *FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceTypeEnum `json:"firstAndThirdPartyAudienceType,omitempty"`
	MembershipDurationDays         *string                                                       `json:"membershipDurationDays,omitempty"`
	MobileDeviceIDList             *MobileDeviceIDList                                           `json:"mobileDeviceIdList,omitempty"`
}
