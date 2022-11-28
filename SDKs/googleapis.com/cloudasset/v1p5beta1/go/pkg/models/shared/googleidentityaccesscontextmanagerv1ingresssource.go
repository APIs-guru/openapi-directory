package shared

// GoogleIdentityAccesscontextmanagerV1IngressSource
// The source that IngressPolicy authorizes access from.
type GoogleIdentityAccesscontextmanagerV1IngressSource struct {
	AccessLevel *string `json:"accessLevel,omitempty"`
	Resource    *string `json:"resource,omitempty"`
}
