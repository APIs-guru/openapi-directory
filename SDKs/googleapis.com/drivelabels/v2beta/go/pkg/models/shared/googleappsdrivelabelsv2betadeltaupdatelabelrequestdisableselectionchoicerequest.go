package shared

type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequest struct {
	DisabledPolicy *GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy `json:"disabledPolicy"`
	FieldID        *string                                             `json:"fieldId"`
	ID             *string                                             `json:"id"`
	UpdateMask     *string                                             `json:"updateMask"`
}
