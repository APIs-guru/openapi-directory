package shared

// ListTCPRoutesResponse
// Response returned by the ListTcpRoutes method.
type ListTCPRoutesResponse struct {
	NextPageToken *string    `json:"nextPageToken,omitempty"`
	TCPRoutes     []TCPRoute `json:"tcpRoutes,omitempty"`
}
