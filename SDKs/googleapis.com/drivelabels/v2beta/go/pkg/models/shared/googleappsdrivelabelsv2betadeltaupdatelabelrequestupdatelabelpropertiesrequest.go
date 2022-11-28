package shared

// GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateLabelPropertiesRequest
// Updates basic properties of a Label.
type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateLabelPropertiesRequest struct {
	Properties *GoogleAppsDriveLabelsV2betaLabelProperties `json:"properties,omitempty"`
	UpdateMask *string                                     `json:"updateMask,omitempty"`
}
