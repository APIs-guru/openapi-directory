package shared

type ListConnectionsResponse struct {
	Connections   []Connection `json:"connections,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
	Unreachable   []string     `json:"unreachable,omitempty"`
}
