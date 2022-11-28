package shared

// SetMaintenancePolicyRequest
// SetMaintenancePolicyRequest sets the maintenance policy for a cluster.
type SetMaintenancePolicyRequest struct {
	ClusterID         *string            `json:"clusterId,omitempty"`
	MaintenancePolicy *MaintenancePolicy `json:"maintenancePolicy,omitempty"`
	Name              *string            `json:"name,omitempty"`
	ProjectID         *string            `json:"projectId,omitempty"`
	Zone              *string            `json:"zone,omitempty"`
}
