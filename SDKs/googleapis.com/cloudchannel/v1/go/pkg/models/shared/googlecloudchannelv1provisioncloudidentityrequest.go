package shared

// GoogleCloudChannelV1ProvisionCloudIdentityRequestInput
// Request message for CloudChannelService.ProvisionCloudIdentity
type GoogleCloudChannelV1ProvisionCloudIdentityRequestInput struct {
	CloudIdentityInfo *GoogleCloudChannelV1CloudIdentityInfoInput `json:"cloudIdentityInfo,omitempty"`
	User              *GoogleCloudChannelV1AdminUser              `json:"user,omitempty"`
	ValidateOnly      *bool                                       `json:"validateOnly,omitempty"`
}
