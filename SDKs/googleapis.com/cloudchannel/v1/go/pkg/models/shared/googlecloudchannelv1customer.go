package shared

type GoogleCloudChannelV1Customer struct {
	AlternateEmail     *string                                `json:"alternateEmail,omitempty"`
	ChannelPartnerID   *string                                `json:"channelPartnerId,omitempty"`
	CloudIdentityID    *string                                `json:"cloudIdentityId,omitempty"`
	CloudIdentityInfo  *GoogleCloudChannelV1CloudIdentityInfo `json:"cloudIdentityInfo,omitempty"`
	CreateTime         *string                                `json:"createTime,omitempty"`
	Domain             *string                                `json:"domain,omitempty"`
	LanguageCode       *string                                `json:"languageCode,omitempty"`
	Name               *string                                `json:"name,omitempty"`
	OrgDisplayName     *string                                `json:"orgDisplayName,omitempty"`
	OrgPostalAddress   *GoogleTypePostalAddress               `json:"orgPostalAddress,omitempty"`
	PrimaryContactInfo *GoogleCloudChannelV1ContactInfo       `json:"primaryContactInfo,omitempty"`
	UpdateTime         *string                                `json:"updateTime,omitempty"`
}
