package shared



type InToto struct {
    ExpectedCommand []string `json:"expectedCommand,omitempty"`
    ExpectedMaterials []ArtifactRule `json:"expectedMaterials,omitempty"`
    ExpectedProducts []ArtifactRule `json:"expectedProducts,omitempty"`
    SigningKeys []SigningKey `json:"signingKeys,omitempty"`
    StepName *string `json:"stepName,omitempty"`
    Threshold *string `json:"threshold,omitempty"`
    
}

