package shared

// SetLabelsRequest
// SetLabelsRequest sets the Google Cloud Platform labels on a Google Container Engine cluster, which will in turn set them for Google Compute Engine resources used by that cluster
type SetLabelsRequest struct {
	ClusterID        *string           `json:"clusterId,omitempty"`
	LabelFingerprint *string           `json:"labelFingerprint,omitempty"`
	Name             *string           `json:"name,omitempty"`
	ProjectID        *string           `json:"projectId,omitempty"`
	ResourceLabels   map[string]string `json:"resourceLabels,omitempty"`
	Zone             *string           `json:"zone,omitempty"`
}
