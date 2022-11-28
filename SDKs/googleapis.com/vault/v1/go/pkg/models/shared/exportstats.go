package shared

// ExportStats
// Progress information for an export.
type ExportStats struct {
	ExportedArtifactCount *string `json:"exportedArtifactCount,omitempty"`
	SizeInBytes           *string `json:"sizeInBytes,omitempty"`
	TotalArtifactCount    *string `json:"totalArtifactCount,omitempty"`
}
