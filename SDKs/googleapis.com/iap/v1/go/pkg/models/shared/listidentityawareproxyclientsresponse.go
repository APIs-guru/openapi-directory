package shared

// ListIdentityAwareProxyClientsResponse
// Response message for ListIdentityAwareProxyClients.
type ListIdentityAwareProxyClientsResponse struct {
	IdentityAwareProxyClients []IdentityAwareProxyClient `json:"identityAwareProxyClients,omitempty"`
	NextPageToken             *string                    `json:"nextPageToken,omitempty"`
}
