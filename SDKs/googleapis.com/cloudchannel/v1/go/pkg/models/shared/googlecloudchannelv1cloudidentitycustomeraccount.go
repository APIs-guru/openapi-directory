package shared

type GoogleCloudChannelV1CloudIdentityCustomerAccount struct {
	CustomerCloudIdentityID *string `json:"customerCloudIdentityId"`
	CustomerName            *string `json:"customerName"`
	Existing                *bool   `json:"existing"`
	Owned                   *bool   `json:"owned"`
}
