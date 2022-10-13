package shared

type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse struct {
	CreateField                     *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateFieldResponse                     `json:"createField"`
	CreateSelectionChoice           *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateSelectionChoiceResponse           `json:"createSelectionChoice"`
	DeleteField                     map[string]interface{}                                                                      `json:"deleteField"`
	DeleteSelectionChoice           map[string]interface{}                                                                      `json:"deleteSelectionChoice"`
	DisableField                    map[string]interface{}                                                                      `json:"disableField"`
	DisableSelectionChoice          map[string]interface{}                                                                      `json:"disableSelectionChoice"`
	EnableField                     map[string]interface{}                                                                      `json:"enableField"`
	EnableSelectionChoice           map[string]interface{}                                                                      `json:"enableSelectionChoice"`
	UpdateField                     *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldPropertiesResponse           `json:"updateField"`
	UpdateFieldType                 map[string]interface{}                                                                      `json:"updateFieldType"`
	UpdateLabel                     map[string]interface{}                                                                      `json:"updateLabel"`
	UpdateSelectionChoiceProperties *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponse `json:"updateSelectionChoiceProperties"`
}
