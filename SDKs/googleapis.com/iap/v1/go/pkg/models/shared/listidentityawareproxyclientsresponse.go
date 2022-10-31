package shared



type ListIdentityAwareProxyClientsResponse struct {
    IdentityAwareProxyClients []IdentityAwareProxyClient `json:"identityAwareProxyClients,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

