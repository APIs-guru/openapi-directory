package shared

// GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequest
// Request to disable a Choice.
type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequest struct {
	DisabledPolicy *GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy `json:"disabledPolicy,omitempty"`
	FieldID        *string                                             `json:"fieldId,omitempty"`
	ID             *string                                             `json:"id,omitempty"`
	UpdateMask     *string                                             `json:"updateMask,omitempty"`
}
