package shared

type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequest struct {
	DateOptions      *GoogleAppsDriveLabelsV2betaFieldDateOptions      `json:"dateOptions"`
	ID               *string                                           `json:"id"`
	IntegerOptions   *GoogleAppsDriveLabelsV2betaFieldIntegerOptions   `json:"integerOptions"`
	LongTextOptions  *GoogleAppsDriveLabelsV2betaFieldLongTextOptions  `json:"longTextOptions"`
	SelectionOptions *GoogleAppsDriveLabelsV2betaFieldSelectionOptions `json:"selectionOptions"`
	TextOptions      *GoogleAppsDriveLabelsV2betaFieldTextOptions      `json:"textOptions"`
	UpdateMask       *string                                           `json:"updateMask"`
	UserOptions      *GoogleAppsDriveLabelsV2betaFieldUserOptions      `json:"userOptions"`
}
