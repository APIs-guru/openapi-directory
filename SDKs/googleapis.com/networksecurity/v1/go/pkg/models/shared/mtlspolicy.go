package shared

type MtlsPolicy struct {
	ClientValidationCa []ValidationCa `json:"clientValidationCa,omitempty"`
}
