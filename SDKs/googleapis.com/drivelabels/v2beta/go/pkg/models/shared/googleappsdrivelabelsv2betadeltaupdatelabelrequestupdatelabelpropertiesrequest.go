package shared

type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateLabelPropertiesRequest struct {
	Properties *GoogleAppsDriveLabelsV2betaLabelProperties `json:"properties,omitempty"`
	UpdateMask *string                                     `json:"updateMask,omitempty"`
}
