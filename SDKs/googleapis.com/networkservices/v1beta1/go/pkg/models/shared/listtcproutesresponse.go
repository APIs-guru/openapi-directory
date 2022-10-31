package shared



type ListTCPRoutesResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    TCPRoutes []TCPRoute `json:"tcpRoutes,omitempty"`
    
}

