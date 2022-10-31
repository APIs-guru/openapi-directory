package shared

type GoogleIamV1Policy struct {
	AuditConfigs []GoogleIamV1AuditConfig `json:"auditConfigs,omitempty"`
	Bindings     []GoogleIamV1Binding     `json:"bindings,omitempty"`
	Etag         *string                  `json:"etag,omitempty"`
	Version      *int32                   `json:"version,omitempty"`
}
