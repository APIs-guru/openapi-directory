package shared

type ImageNote struct {
	Fingerprint *Fingerprint `json:"fingerprint"`
	ResourceURL *string      `json:"resourceUrl"`
}
