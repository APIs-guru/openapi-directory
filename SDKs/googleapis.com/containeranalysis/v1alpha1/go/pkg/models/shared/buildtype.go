package shared

type BuildType struct {
	BuilderVersion *string         `json:"builderVersion"`
	Signature      *BuildSignature `json:"signature"`
}
