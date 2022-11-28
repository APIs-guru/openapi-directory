package shared

// IdentityAwareProxyClient
// Contains the data that describes an Identity Aware Proxy owned client.
type IdentityAwareProxyClient struct {
	DisplayName *string `json:"displayName,omitempty"`
	Name        *string `json:"name,omitempty"`
	Secret      *string `json:"secret,omitempty"`
}

// IdentityAwareProxyClientInput
// Contains the data that describes an Identity Aware Proxy owned client.
type IdentityAwareProxyClientInput struct {
	DisplayName *string `json:"displayName,omitempty"`
}
