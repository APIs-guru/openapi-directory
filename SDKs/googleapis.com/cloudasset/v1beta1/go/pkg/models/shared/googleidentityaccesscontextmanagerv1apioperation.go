package shared

// GoogleIdentityAccesscontextmanagerV1APIOperation
// Identification for an API Operation.
type GoogleIdentityAccesscontextmanagerV1APIOperation struct {
	MethodSelectors []GoogleIdentityAccesscontextmanagerV1MethodSelector `json:"methodSelectors,omitempty"`
	ServiceName     *string                                              `json:"serviceName,omitempty"`
}
