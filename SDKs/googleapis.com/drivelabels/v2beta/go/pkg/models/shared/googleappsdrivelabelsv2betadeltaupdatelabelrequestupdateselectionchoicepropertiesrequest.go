package shared

type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest struct {
	FieldID    *string                                                           `json:"fieldId"`
	ID         *string                                                           `json:"id"`
	Properties *GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties `json:"properties"`
	UpdateMask *string                                                           `json:"updateMask"`
}
