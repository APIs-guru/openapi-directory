package shared

type GoogleCloudChannelV1Customer struct {
	AlternateEmail     *string                                `json:"alternateEmail"`
	ChannelPartnerID   *string                                `json:"channelPartnerId"`
	CloudIdentityID    *string                                `json:"cloudIdentityId"`
	CloudIdentityInfo  *GoogleCloudChannelV1CloudIdentityInfo `json:"cloudIdentityInfo"`
	CreateTime         *string                                `json:"createTime"`
	Domain             *string                                `json:"domain"`
	LanguageCode       *string                                `json:"languageCode"`
	Name               *string                                `json:"name"`
	OrgDisplayName     *string                                `json:"orgDisplayName"`
	OrgPostalAddress   *GoogleTypePostalAddress               `json:"orgPostalAddress"`
	PrimaryContactInfo *GoogleCloudChannelV1ContactInfo       `json:"primaryContactInfo"`
	UpdateTime         *string                                `json:"updateTime"`
}
