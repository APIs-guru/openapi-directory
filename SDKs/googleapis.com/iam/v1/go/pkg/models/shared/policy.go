package shared

type Policy struct {
	AuditConfigs []AuditConfig `json:"auditConfigs"`
	Bindings     []Binding     `json:"bindings"`
	Etag         *string       `json:"etag"`
	Version      *int32        `json:"version"`
}
