package shared

// GoogleCloudRunV2BinaryAuthorization
// Settings for Binary Authorization feature.
type GoogleCloudRunV2BinaryAuthorization struct {
	BreakglassJustification *string `json:"breakglassJustification,omitempty"`
	UseDefault              *bool   `json:"useDefault,omitempty"`
}
