package shared

type GenerateAccessTokenRequest struct {
	Delegates []string `json:"delegates"`
	Lifetime  *string  `json:"lifetime"`
	Scope     []string `json:"scope"`
}
