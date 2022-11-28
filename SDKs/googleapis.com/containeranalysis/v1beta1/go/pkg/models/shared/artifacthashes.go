package shared

// ArtifactHashes
// Defines a hash object for use in Materials and Products.
type ArtifactHashes struct {
	Sha256 *string `json:"sha256,omitempty"`
}
