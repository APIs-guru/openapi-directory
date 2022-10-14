package shared

type Basis struct {
	Fingerprint *Fingerprint `json:"fingerprint,omitempty"`
	ResourceURL *string      `json:"resourceUrl,omitempty"`
}
