package shared

type ExportStats struct {
	ExportedArtifactCount *string `json:"exportedArtifactCount"`
	SizeInBytes           *string `json:"sizeInBytes"`
	TotalArtifactCount    *string `json:"totalArtifactCount"`
}
