package shared

// MtlsPolicy
// Specification of the MTLSPolicy.
type MtlsPolicy struct {
	ClientValidationCa []ValidationCa `json:"clientValidationCa,omitempty"`
}
