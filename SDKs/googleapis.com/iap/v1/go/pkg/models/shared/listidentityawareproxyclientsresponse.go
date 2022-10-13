package shared

type ListIdentityAwareProxyClientsResponse struct {
	IdentityAwareProxyClients []IdentityAwareProxyClient `json:"identityAwareProxyClients"`
	NextPageToken             *string                    `json:"nextPageToken"`
}
