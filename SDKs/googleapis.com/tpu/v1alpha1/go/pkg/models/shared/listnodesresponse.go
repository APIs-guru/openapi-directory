package shared

type ListNodesResponse struct {
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	Nodes         []Node   `json:"nodes,omitempty"`
	Unreachable   []string `json:"unreachable,omitempty"`
}
