package shared




type AccountUserProfileTraffickerTypeEnum string

const (
    AccountUserProfileTraffickerTypeEnumInternalNonTrafficker AccountUserProfileTraffickerTypeEnum = "INTERNAL_NON_TRAFFICKER"
AccountUserProfileTraffickerTypeEnumInternalTrafficker AccountUserProfileTraffickerTypeEnum = "INTERNAL_TRAFFICKER"
AccountUserProfileTraffickerTypeEnumExternalTrafficker AccountUserProfileTraffickerTypeEnum = "EXTERNAL_TRAFFICKER"
)



type AccountUserProfileUserAccessTypeEnum string

const (
    AccountUserProfileUserAccessTypeEnumNormalUser AccountUserProfileUserAccessTypeEnum = "NORMAL_USER"
AccountUserProfileUserAccessTypeEnumSuperUser AccountUserProfileUserAccessTypeEnum = "SUPER_USER"
AccountUserProfileUserAccessTypeEnumInternalAdministrator AccountUserProfileUserAccessTypeEnum = "INTERNAL_ADMINISTRATOR"
AccountUserProfileUserAccessTypeEnumReadOnlySuperUser AccountUserProfileUserAccessTypeEnum = "READ_ONLY_SUPER_USER"
)


type AccountUserProfile struct {
    AccountID *string `json:"accountId,omitempty"`
    Active *bool `json:"active,omitempty"`
    AdvertiserFilter *ObjectFilter `json:"advertiserFilter,omitempty"`
    CampaignFilter *ObjectFilter `json:"campaignFilter,omitempty"`
    Comments *string `json:"comments,omitempty"`
    Email *string `json:"email,omitempty"`
    ID *string `json:"id,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Locale *string `json:"locale,omitempty"`
    Name *string `json:"name,omitempty"`
    SiteFilter *ObjectFilter `json:"siteFilter,omitempty"`
    SubaccountID *string `json:"subaccountId,omitempty"`
    TraffickerType *AccountUserProfileTraffickerTypeEnum `json:"traffickerType,omitempty"`
    UserAccessType *AccountUserProfileUserAccessTypeEnum `json:"userAccessType,omitempty"`
    UserRoleFilter *ObjectFilter `json:"userRoleFilter,omitempty"`
    UserRoleID *string `json:"userRoleId,omitempty"`
    
}

