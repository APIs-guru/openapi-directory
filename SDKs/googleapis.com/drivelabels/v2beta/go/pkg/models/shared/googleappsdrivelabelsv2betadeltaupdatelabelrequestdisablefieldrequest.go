package shared

// GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest
// Request to disable the Field.
type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest struct {
	DisabledPolicy *GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy `json:"disabledPolicy,omitempty"`
	ID             *string                                             `json:"id,omitempty"`
	UpdateMask     *string                                             `json:"updateMask,omitempty"`
}
