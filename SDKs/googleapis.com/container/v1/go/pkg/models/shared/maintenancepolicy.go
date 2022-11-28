package shared

// MaintenancePolicy
// MaintenancePolicy defines the maintenance policy to be used for the cluster.
type MaintenancePolicy struct {
	ResourceVersion *string            `json:"resourceVersion,omitempty"`
	Window          *MaintenanceWindow `json:"window,omitempty"`
}
