package shared

type ApplicationCategory struct {
	Kind      *string `json:"kind"`
	Primary   *string `json:"primary"`
	Secondary *string `json:"secondary"`
}
