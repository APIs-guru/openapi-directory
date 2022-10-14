package shared

type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldPropertiesRequest struct {
	ID         *string                                     `json:"id,omitempty"`
	Properties *GoogleAppsDriveLabelsV2betaFieldProperties `json:"properties,omitempty"`
	UpdateMask *string                                     `json:"updateMask,omitempty"`
}
