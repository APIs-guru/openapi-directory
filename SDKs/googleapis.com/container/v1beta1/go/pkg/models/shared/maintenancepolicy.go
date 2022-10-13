package shared

type MaintenancePolicy struct {
	ResourceVersion *string            `json:"resourceVersion"`
	Window          *MaintenanceWindow `json:"window"`
}
