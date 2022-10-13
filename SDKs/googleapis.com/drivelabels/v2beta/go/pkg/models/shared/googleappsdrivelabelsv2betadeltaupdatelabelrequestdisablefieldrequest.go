package shared

type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest struct {
	DisabledPolicy *GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy `json:"disabledPolicy"`
	ID             *string                                             `json:"id"`
	UpdateMask     *string                                             `json:"updateMask"`
}
