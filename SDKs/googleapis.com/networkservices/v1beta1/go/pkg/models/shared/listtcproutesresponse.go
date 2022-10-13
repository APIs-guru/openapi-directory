package shared

type ListTCPRoutesResponse struct {
	NextPageToken *string    `json:"nextPageToken"`
	TCPRoutes     []TCPRoute `json:"tcpRoutes"`
}
