package shared

type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequest struct {
	CreateField                     *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequest                     `json:"createField"`
	CreateSelectionChoice           *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequest           `json:"createSelectionChoice"`
	DeleteField                     *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteFieldRequest                     `json:"deleteField"`
	DeleteSelectionChoice           *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteSelectionChoiceRequest           `json:"deleteSelectionChoice"`
	DisableField                    *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest                    `json:"disableField"`
	DisableSelectionChoice          *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequest          `json:"disableSelectionChoice"`
	EnableField                     *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableFieldRequest                     `json:"enableField"`
	EnableSelectionChoice           *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequest           `json:"enableSelectionChoice"`
	UpdateField                     *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldPropertiesRequest           `json:"updateField"`
	UpdateFieldType                 *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequest                 `json:"updateFieldType"`
	UpdateLabel                     *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateLabelPropertiesRequest           `json:"updateLabel"`
	UpdateSelectionChoiceProperties *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest `json:"updateSelectionChoiceProperties"`
}
