package shared

type GoogleCloudChannelV1ProvisionCloudIdentityRequest struct {
	CloudIdentityInfo *GoogleCloudChannelV1CloudIdentityInfo `json:"cloudIdentityInfo"`
	User              *GoogleCloudChannelV1AdminUser         `json:"user"`
	ValidateOnly      *bool                                  `json:"validateOnly"`
}
