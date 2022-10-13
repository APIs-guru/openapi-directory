package shared

type AccountUserProfileTraffickerTypeEnum string

const (
	AccountUserProfileTraffickerTypeEnumInternalNonTrafficker AccountUserProfileTraffickerTypeEnum = "INTERNAL_NON_TRAFFICKER"
	AccountUserProfileTraffickerTypeEnumInternalTrafficker    AccountUserProfileTraffickerTypeEnum = "INTERNAL_TRAFFICKER"
	AccountUserProfileTraffickerTypeEnumExternalTrafficker    AccountUserProfileTraffickerTypeEnum = "EXTERNAL_TRAFFICKER"
)

type AccountUserProfileUserAccessTypeEnum string

const (
	AccountUserProfileUserAccessTypeEnumNormalUser            AccountUserProfileUserAccessTypeEnum = "NORMAL_USER"
	AccountUserProfileUserAccessTypeEnumSuperUser             AccountUserProfileUserAccessTypeEnum = "SUPER_USER"
	AccountUserProfileUserAccessTypeEnumInternalAdministrator AccountUserProfileUserAccessTypeEnum = "INTERNAL_ADMINISTRATOR"
	AccountUserProfileUserAccessTypeEnumReadOnlySuperUser     AccountUserProfileUserAccessTypeEnum = "READ_ONLY_SUPER_USER"
)

type AccountUserProfile struct {
	AccountID        *string                               `json:"accountId"`
	Active           *bool                                 `json:"active"`
	AdvertiserFilter *ObjectFilter                         `json:"advertiserFilter"`
	CampaignFilter   *ObjectFilter                         `json:"campaignFilter"`
	Comments         *string                               `json:"comments"`
	Email            *string                               `json:"email"`
	ID               *string                               `json:"id"`
	Kind             *string                               `json:"kind"`
	Locale           *string                               `json:"locale"`
	Name             *string                               `json:"name"`
	SiteFilter       *ObjectFilter                         `json:"siteFilter"`
	SubaccountID     *string                               `json:"subaccountId"`
	TraffickerType   *AccountUserProfileTraffickerTypeEnum `json:"traffickerType"`
	UserAccessType   *AccountUserProfileUserAccessTypeEnum `json:"userAccessType"`
	UserRoleFilter   *ObjectFilter                         `json:"userRoleFilter"`
	UserRoleID       *string                               `json:"userRoleId"`
}
