package shared

type GoogleCloudChannelV1ImportCustomerRequest struct {
	AuthToken         *string `json:"authToken"`
	ChannelPartnerID  *string `json:"channelPartnerId"`
	CloudIdentityID   *string `json:"cloudIdentityId"`
	Customer          *string `json:"customer"`
	Domain            *string `json:"domain"`
	OverwriteIfExists *bool   `json:"overwriteIfExists"`
}
