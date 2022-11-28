package shared

// GoogleCloudChannelV1CloudIdentityCustomerAccount
// Entity representing a Cloud Identity account that may be associated with a Channel Services API partner.
type GoogleCloudChannelV1CloudIdentityCustomerAccount struct {
	CustomerCloudIdentityID *string `json:"customerCloudIdentityId,omitempty"`
	CustomerName            *string `json:"customerName,omitempty"`
	Existing                *bool   `json:"existing,omitempty"`
	Owned                   *bool   `json:"owned,omitempty"`
}
