package shared

type SchemeAPIKeyAuth struct {
	APIKey string `security:"name=X-IPTWIST-TOKEN"`
}
