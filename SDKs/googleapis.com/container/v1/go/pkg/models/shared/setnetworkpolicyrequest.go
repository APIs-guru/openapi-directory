package shared

type SetNetworkPolicyRequest struct {
	ClusterID     *string        `json:"clusterId"`
	Name          *string        `json:"name"`
	NetworkPolicy *NetworkPolicy `json:"networkPolicy"`
	ProjectID     *string        `json:"projectId"`
	Zone          *string        `json:"zone"`
}
