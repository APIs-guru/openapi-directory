package shared

type GoogleIamV1Policy struct {
	AuditConfigs []GoogleIamV1AuditConfig `json:"auditConfigs"`
	Bindings     []GoogleIamV1Binding     `json:"bindings"`
	Etag         *string                  `json:"etag"`
	Version      *int32                   `json:"version"`
}
