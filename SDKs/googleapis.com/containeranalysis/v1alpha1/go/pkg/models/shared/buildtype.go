package shared

// BuildType
// Note holding the version of the provider's builder and the signature of the provenance message in linked BuildDetails.
type BuildType struct {
	BuilderVersion *string         `json:"builderVersion,omitempty"`
	Signature      *BuildSignature `json:"signature,omitempty"`
}
