package shared

// ServiceIdentity
// The per-product per-project service identity for Cloud TPU service.
type ServiceIdentity struct {
	Email *string `json:"email,omitempty"`
}
