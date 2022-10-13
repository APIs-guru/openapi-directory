package shared

type ListNodesResponse struct {
	NextPageToken *string  `json:"nextPageToken"`
	Nodes         []Node   `json:"nodes"`
	Unreachable   []string `json:"unreachable"`
}
