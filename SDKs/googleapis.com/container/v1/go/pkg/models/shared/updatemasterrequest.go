package shared

type UpdateMasterRequest struct {
	ClusterID     *string `json:"clusterId"`
	MasterVersion *string `json:"masterVersion"`
	Name          *string `json:"name"`
	ProjectID     *string `json:"projectId"`
	Zone          *string `json:"zone"`
}
