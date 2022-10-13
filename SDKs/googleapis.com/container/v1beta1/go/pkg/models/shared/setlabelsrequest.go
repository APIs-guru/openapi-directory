package shared

type SetLabelsRequest struct {
	ClusterID        *string           `json:"clusterId"`
	LabelFingerprint *string           `json:"labelFingerprint"`
	Name             *string           `json:"name"`
	ProjectID        *string           `json:"projectId"`
	ResourceLabels   map[string]string `json:"resourceLabels"`
	Zone             *string           `json:"zone"`
}
