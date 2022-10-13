package shared

type ClusterSelector struct {
	ClusterLabels map[string]string `json:"clusterLabels"`
	Zone          *string           `json:"zone"`
}
