package shared

type GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum string

const (
	GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnumCustomerTypeUnspecified GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum = "CUSTOMER_TYPE_UNSPECIFIED"
	GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnumDomain                  GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum = "DOMAIN"
	GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnumTeam                    GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum = "TEAM"
)

type GoogleCloudChannelV1CloudIdentityInfo struct {
	AdminConsoleURI  *string                                                `json:"adminConsoleUri"`
	AlternateEmail   *string                                                `json:"alternateEmail"`
	CustomerType     *GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum `json:"customerType"`
	EduData          *GoogleCloudChannelV1EduData                           `json:"eduData"`
	IsDomainVerified *bool                                                  `json:"isDomainVerified"`
	LanguageCode     *string                                                `json:"languageCode"`
	PhoneNumber      *string                                                `json:"phoneNumber"`
	PrimaryDomain    *string                                                `json:"primaryDomain"`
}
