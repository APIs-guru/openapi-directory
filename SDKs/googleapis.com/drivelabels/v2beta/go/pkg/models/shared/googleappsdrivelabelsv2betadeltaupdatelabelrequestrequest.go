package shared

type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequest struct {
	CreateField                     *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequest                     `json:"createField,omitempty"`
	CreateSelectionChoice           *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequest           `json:"createSelectionChoice,omitempty"`
	DeleteField                     *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteFieldRequest                     `json:"deleteField,omitempty"`
	DeleteSelectionChoice           *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteSelectionChoiceRequest           `json:"deleteSelectionChoice,omitempty"`
	DisableField                    *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest                    `json:"disableField,omitempty"`
	DisableSelectionChoice          *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequest          `json:"disableSelectionChoice,omitempty"`
	EnableField                     *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableFieldRequest                     `json:"enableField,omitempty"`
	EnableSelectionChoice           *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequest           `json:"enableSelectionChoice,omitempty"`
	UpdateField                     *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldPropertiesRequest           `json:"updateField,omitempty"`
	UpdateFieldType                 *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequest                 `json:"updateFieldType,omitempty"`
	UpdateLabel                     *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateLabelPropertiesRequest           `json:"updateLabel,omitempty"`
	UpdateSelectionChoiceProperties *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest `json:"updateSelectionChoiceProperties,omitempty"`
}
