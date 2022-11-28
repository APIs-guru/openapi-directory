package shared

// GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput
// A single kind of update to apply to a Label.
type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput struct {
	CreateField                     *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequestInput                `json:"createField,omitempty"`
	CreateSelectionChoice           *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequestInput      `json:"createSelectionChoice,omitempty"`
	DeleteField                     *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteFieldRequest                     `json:"deleteField,omitempty"`
	DeleteSelectionChoice           *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteSelectionChoiceRequest           `json:"deleteSelectionChoice,omitempty"`
	DisableField                    *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest                    `json:"disableField,omitempty"`
	DisableSelectionChoice          *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequest          `json:"disableSelectionChoice,omitempty"`
	EnableField                     *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableFieldRequest                     `json:"enableField,omitempty"`
	EnableSelectionChoice           *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequest           `json:"enableSelectionChoice,omitempty"`
	UpdateField                     *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldPropertiesRequest           `json:"updateField,omitempty"`
	UpdateFieldType                 *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequestInput            `json:"updateFieldType,omitempty"`
	UpdateLabel                     *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateLabelPropertiesRequest           `json:"updateLabel,omitempty"`
	UpdateSelectionChoiceProperties *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest `json:"updateSelectionChoiceProperties,omitempty"`
}
