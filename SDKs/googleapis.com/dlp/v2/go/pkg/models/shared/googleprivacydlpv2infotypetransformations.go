package shared

// GooglePrivacyDlpV2InfoTypeTransformations
// A type of transformation that will scan unstructured text and apply various `PrimitiveTransformation`s to each finding, where the transformation is applied to only values that were identified as a specific info_type.
type GooglePrivacyDlpV2InfoTypeTransformations struct {
	Transformations []GooglePrivacyDlpV2InfoTypeTransformation `json:"transformations,omitempty"`
}
