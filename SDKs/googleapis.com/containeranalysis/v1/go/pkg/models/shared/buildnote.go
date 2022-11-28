package shared

// BuildNote
// Note holding the version of the provider's builder and the signature of the provenance message in the build details occurrence.
type BuildNote struct {
	BuilderVersion *string `json:"builderVersion,omitempty"`
}
