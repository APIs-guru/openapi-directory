package shared

type Build struct {
	BuilderVersion *string         `json:"builderVersion"`
	Signature      *BuildSignature `json:"signature"`
}
