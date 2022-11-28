package shared

// BatchEnableServicesRequest
// Request message for the `BatchEnableServices` method.
type BatchEnableServicesRequest struct {
	ServiceIds []string `json:"serviceIds,omitempty"`
}
