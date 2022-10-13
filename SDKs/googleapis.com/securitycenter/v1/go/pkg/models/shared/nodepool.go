package shared

type NodePool struct {
	Name  *string `json:"name"`
	Nodes []Node  `json:"nodes"`
}
