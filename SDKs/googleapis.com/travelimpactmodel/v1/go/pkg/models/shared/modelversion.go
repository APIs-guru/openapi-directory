package shared

// ModelVersion
// Travel Impact Model version. For more information about the model versioning see https://github.com/google/travel-impact-model/#versioning.
type ModelVersion struct {
	Dated *string `json:"dated,omitempty"`
	Major *int32  `json:"major,omitempty"`
	Minor *int32  `json:"minor,omitempty"`
	Patch *int32  `json:"patch,omitempty"`
}
