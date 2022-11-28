package shared

// Build
// Note holding the version of the provider's builder and the signature of the provenance message in the build details occurrence.
type Build struct {
	BuilderVersion *string         `json:"builderVersion,omitempty"`
	Signature      *BuildSignature `json:"signature,omitempty"`
}
