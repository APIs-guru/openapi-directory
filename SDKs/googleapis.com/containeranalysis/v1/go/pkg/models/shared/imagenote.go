package shared

// ImageNote
// Basis describes the base image portion (Note) of the DockerImage relationship. Linked occurrences are derived from this or an equivalent image via: FROM Or an equivalent reference, e.g., a tag of the resource_url.
type ImageNote struct {
	Fingerprint *Fingerprint `json:"fingerprint,omitempty"`
	ResourceURL *string      `json:"resourceUrl,omitempty"`
}
