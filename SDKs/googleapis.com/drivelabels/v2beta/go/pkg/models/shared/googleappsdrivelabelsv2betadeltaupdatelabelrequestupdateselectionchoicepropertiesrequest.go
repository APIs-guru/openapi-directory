package shared

// GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest
// Request to update a Choice properties.
type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest struct {
	FieldID    *string                                                           `json:"fieldId,omitempty"`
	ID         *string                                                           `json:"id,omitempty"`
	Properties *GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties `json:"properties,omitempty"`
	UpdateMask *string                                                           `json:"updateMask,omitempty"`
}
