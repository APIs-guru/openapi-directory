package shared

// InToto
// This contains the fields corresponding to the definition of a software supply chain step in an in-toto layout. This information goes into a Grafeas note.
type InToto struct {
	ExpectedCommand   []string       `json:"expectedCommand,omitempty"`
	ExpectedMaterials []ArtifactRule `json:"expectedMaterials,omitempty"`
	ExpectedProducts  []ArtifactRule `json:"expectedProducts,omitempty"`
	SigningKeys       []SigningKey   `json:"signingKeys,omitempty"`
	StepName          *string        `json:"stepName,omitempty"`
	Threshold         *string        `json:"threshold,omitempty"`
}
