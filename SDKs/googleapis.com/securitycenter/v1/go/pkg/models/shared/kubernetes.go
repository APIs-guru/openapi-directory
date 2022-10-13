package shared

type Kubernetes struct {
	AccessReviews []AccessReview                       `json:"accessReviews"`
	Bindings      []GoogleCloudSecuritycenterV1Binding `json:"bindings"`
	NodePools     []NodePool                           `json:"nodePools"`
	Nodes         []Node                               `json:"nodes"`
	Pods          []Pod                                `json:"pods"`
	Roles         []Role                               `json:"roles"`
}
