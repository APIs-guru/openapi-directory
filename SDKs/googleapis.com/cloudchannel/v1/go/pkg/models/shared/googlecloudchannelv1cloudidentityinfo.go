package shared




type GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum string

const (
    GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnumCustomerTypeUnspecified GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum = "CUSTOMER_TYPE_UNSPECIFIED"
GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnumDomain GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum = "DOMAIN"
GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnumTeam GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum = "TEAM"
)


type GoogleCloudChannelV1CloudIdentityInfo struct {
    AdminConsoleURI *string `json:"adminConsoleUri,omitempty"`
    AlternateEmail *string `json:"alternateEmail,omitempty"`
    CustomerType *GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum `json:"customerType,omitempty"`
    EduData *GoogleCloudChannelV1EduData `json:"eduData,omitempty"`
    IsDomainVerified *bool `json:"isDomainVerified,omitempty"`
    LanguageCode *string `json:"languageCode,omitempty"`
    PhoneNumber *string `json:"phoneNumber,omitempty"`
    PrimaryDomain *string `json:"primaryDomain,omitempty"`
    
}

