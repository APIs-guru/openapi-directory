package shared

type GoogleCloudChannelV1ProvisionCloudIdentityRequest struct {
	CloudIdentityInfo *GoogleCloudChannelV1CloudIdentityInfo `json:"cloudIdentityInfo,omitempty"`
	User              *GoogleCloudChannelV1AdminUser         `json:"user,omitempty"`
	ValidateOnly      *bool                                  `json:"validateOnly,omitempty"`
}
