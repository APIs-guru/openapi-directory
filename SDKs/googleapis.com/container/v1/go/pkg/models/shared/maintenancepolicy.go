package shared

type MaintenancePolicy struct {
	ResourceVersion *string            `json:"resourceVersion,omitempty"`
	Window          *MaintenanceWindow `json:"window,omitempty"`
}
