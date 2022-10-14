package shared

type IdentityAwareProxyClient struct {
	DisplayName *string `json:"displayName,omitempty"`
	Name        *string `json:"name,omitempty"`
	Secret      *string `json:"secret,omitempty"`
}
