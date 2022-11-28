package shared

// Material
// Material is a material used in the generation of the provenance
type Material struct {
	Digest map[string]string `json:"digest,omitempty"`
	URI    *string           `json:"uri,omitempty"`
}
