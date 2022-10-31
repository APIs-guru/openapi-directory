package shared



type Build struct {
    BuilderVersion *string `json:"builderVersion,omitempty"`
    Signature *BuildSignature `json:"signature,omitempty"`
    
}

