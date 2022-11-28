package shared

// GoogleCloudChannelV1ImportCustomerRequest
// Request message for CloudChannelService.ImportCustomer
type GoogleCloudChannelV1ImportCustomerRequest struct {
	AuthToken         *string `json:"authToken,omitempty"`
	ChannelPartnerID  *string `json:"channelPartnerId,omitempty"`
	CloudIdentityID   *string `json:"cloudIdentityId,omitempty"`
	Customer          *string `json:"customer,omitempty"`
	Domain            *string `json:"domain,omitempty"`
	OverwriteIfExists *bool   `json:"overwriteIfExists,omitempty"`
}
