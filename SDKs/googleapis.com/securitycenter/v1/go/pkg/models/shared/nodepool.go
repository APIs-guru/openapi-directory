package shared



type NodePool struct {
    Name *string `json:"name,omitempty"`
    Nodes []Node `json:"nodes,omitempty"`
    
}

