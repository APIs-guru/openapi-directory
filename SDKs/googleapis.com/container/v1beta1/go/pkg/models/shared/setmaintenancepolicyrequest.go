package shared

type SetMaintenancePolicyRequest struct {
	ClusterID         *string            `json:"clusterId"`
	MaintenancePolicy *MaintenancePolicy `json:"maintenancePolicy"`
	Name              *string            `json:"name"`
	ProjectID         *string            `json:"projectId"`
	Zone              *string            `json:"zone"`
}
