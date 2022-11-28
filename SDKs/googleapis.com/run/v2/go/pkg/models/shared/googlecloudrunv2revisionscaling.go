package shared

// GoogleCloudRunV2RevisionScaling
// Settings for revision-level scaling settings.
type GoogleCloudRunV2RevisionScaling struct {
	MaxInstanceCount *int32 `json:"maxInstanceCount,omitempty"`
	MinInstanceCount *int32 `json:"minInstanceCount,omitempty"`
}
