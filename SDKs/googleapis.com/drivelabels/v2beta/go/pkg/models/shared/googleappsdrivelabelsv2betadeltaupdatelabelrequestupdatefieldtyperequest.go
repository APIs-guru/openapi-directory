package shared

// GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequestInput
// Request to change the type of a Field.
type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequestInput struct {
	DateOptions      *GoogleAppsDriveLabelsV2betaFieldDateOptionsInput      `json:"dateOptions,omitempty"`
	ID               *string                                                `json:"id,omitempty"`
	SelectionOptions *GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput `json:"selectionOptions,omitempty"`
	UpdateMask       *string                                                `json:"updateMask,omitempty"`
	UserOptions      *GoogleAppsDriveLabelsV2betaFieldUserOptions           `json:"userOptions,omitempty"`
}
