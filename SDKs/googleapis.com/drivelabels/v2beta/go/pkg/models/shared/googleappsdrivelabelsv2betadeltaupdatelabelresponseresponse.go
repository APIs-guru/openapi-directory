package shared

type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse struct {
	CreateField                     *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateFieldResponse                     `json:"createField,omitempty"`
	CreateSelectionChoice           *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateSelectionChoiceResponse           `json:"createSelectionChoice,omitempty"`
	DeleteField                     map[string]interface{}                                                                      `json:"deleteField,omitempty"`
	DeleteSelectionChoice           map[string]interface{}                                                                      `json:"deleteSelectionChoice,omitempty"`
	DisableField                    map[string]interface{}                                                                      `json:"disableField,omitempty"`
	DisableSelectionChoice          map[string]interface{}                                                                      `json:"disableSelectionChoice,omitempty"`
	EnableField                     map[string]interface{}                                                                      `json:"enableField,omitempty"`
	EnableSelectionChoice           map[string]interface{}                                                                      `json:"enableSelectionChoice,omitempty"`
	UpdateField                     *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldPropertiesResponse           `json:"updateField,omitempty"`
	UpdateFieldType                 map[string]interface{}                                                                      `json:"updateFieldType,omitempty"`
	UpdateLabel                     map[string]interface{}                                                                      `json:"updateLabel,omitempty"`
	UpdateSelectionChoiceProperties *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponse `json:"updateSelectionChoiceProperties,omitempty"`
}
