package shared

type InToto struct {
	ExpectedCommand   []string       `json:"expectedCommand"`
	ExpectedMaterials []ArtifactRule `json:"expectedMaterials"`
	ExpectedProducts  []ArtifactRule `json:"expectedProducts"`
	SigningKeys       []SigningKey   `json:"signingKeys"`
	StepName          *string        `json:"stepName"`
	Threshold         *string        `json:"threshold"`
}
