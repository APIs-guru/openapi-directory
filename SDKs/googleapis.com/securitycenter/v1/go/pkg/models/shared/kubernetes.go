package shared



type Kubernetes struct {
    AccessReviews []AccessReview `json:"accessReviews,omitempty"`
    Bindings []GoogleCloudSecuritycenterV1Binding `json:"bindings,omitempty"`
    NodePools []NodePool `json:"nodePools,omitempty"`
    Nodes []Node `json:"nodes,omitempty"`
    Pods []Pod `json:"pods,omitempty"`
    Roles []Role `json:"roles,omitempty"`
    
}

