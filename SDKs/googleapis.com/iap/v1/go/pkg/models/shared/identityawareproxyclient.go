package shared

type IdentityAwareProxyClient struct {
	DisplayName *string `json:"displayName"`
	Name        *string `json:"name"`
	Secret      *string `json:"secret"`
}
