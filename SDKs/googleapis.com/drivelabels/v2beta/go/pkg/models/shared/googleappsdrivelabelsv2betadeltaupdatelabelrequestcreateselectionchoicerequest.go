package shared

// GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequestInput
// Request to create a Selection Choice.
type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequestInput struct {
	Choice  *GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput `json:"choice,omitempty"`
	FieldID *string                                                      `json:"fieldId,omitempty"`
}
