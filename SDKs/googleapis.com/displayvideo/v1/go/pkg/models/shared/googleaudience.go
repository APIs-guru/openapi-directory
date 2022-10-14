package shared

type GoogleAudienceGoogleAudienceTypeEnum string

const (
	GoogleAudienceGoogleAudienceTypeEnumGoogleAudienceTypeUnspecified         GoogleAudienceGoogleAudienceTypeEnum = "GOOGLE_AUDIENCE_TYPE_UNSPECIFIED"
	GoogleAudienceGoogleAudienceTypeEnumGoogleAudienceTypeAffinity            GoogleAudienceGoogleAudienceTypeEnum = "GOOGLE_AUDIENCE_TYPE_AFFINITY"
	GoogleAudienceGoogleAudienceTypeEnumGoogleAudienceTypeInMarket            GoogleAudienceGoogleAudienceTypeEnum = "GOOGLE_AUDIENCE_TYPE_IN_MARKET"
	GoogleAudienceGoogleAudienceTypeEnumGoogleAudienceTypeInstalledApps       GoogleAudienceGoogleAudienceTypeEnum = "GOOGLE_AUDIENCE_TYPE_INSTALLED_APPS"
	GoogleAudienceGoogleAudienceTypeEnumGoogleAudienceTypeNewMobileDevices    GoogleAudienceGoogleAudienceTypeEnum = "GOOGLE_AUDIENCE_TYPE_NEW_MOBILE_DEVICES"
	GoogleAudienceGoogleAudienceTypeEnumGoogleAudienceTypeLifeEvent           GoogleAudienceGoogleAudienceTypeEnum = "GOOGLE_AUDIENCE_TYPE_LIFE_EVENT"
	GoogleAudienceGoogleAudienceTypeEnumGoogleAudienceTypeExtendedDemographic GoogleAudienceGoogleAudienceTypeEnum = "GOOGLE_AUDIENCE_TYPE_EXTENDED_DEMOGRAPHIC"
)

type GoogleAudience struct {
	DisplayName        *string                               `json:"displayName,omitempty"`
	GoogleAudienceID   *string                               `json:"googleAudienceId,omitempty"`
	GoogleAudienceType *GoogleAudienceGoogleAudienceTypeEnum `json:"googleAudienceType,omitempty"`
	Name               *string                               `json:"name,omitempty"`
}
