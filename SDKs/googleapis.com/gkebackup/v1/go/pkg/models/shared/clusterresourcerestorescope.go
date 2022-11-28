package shared

// ClusterResourceRestoreScope
// Identifies the cluster-scoped resources to restore from the Backup.
type ClusterResourceRestoreScope struct {
	SelectedGroupKinds []GroupKind `json:"selectedGroupKinds,omitempty"`
}
