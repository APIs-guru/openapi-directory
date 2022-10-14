package shared

type BuildType struct {
	BuilderVersion *string         `json:"builderVersion,omitempty"`
	Signature      *BuildSignature `json:"signature,omitempty"`
}
