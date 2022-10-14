package shared

type GoogleAppsDriveLabelsV2betaFieldLimits struct {
	DateLimits           *GoogleAppsDriveLabelsV2betaDateLimits      `json:"dateLimits,omitempty"`
	IntegerLimits        *GoogleAppsDriveLabelsV2betaIntegerLimits   `json:"integerLimits,omitempty"`
	LongTextLimits       *GoogleAppsDriveLabelsV2betaLongTextLimits  `json:"longTextLimits,omitempty"`
	MaxDescriptionLength *int32                                      `json:"maxDescriptionLength,omitempty"`
	MaxDisplayNameLength *int32                                      `json:"maxDisplayNameLength,omitempty"`
	MaxIDLength          *int32                                      `json:"maxIdLength,omitempty"`
	SelectionLimits      *GoogleAppsDriveLabelsV2betaSelectionLimits `json:"selectionLimits,omitempty"`
	TextLimits           *GoogleAppsDriveLabelsV2betaTextLimits      `json:"textLimits,omitempty"`
	UserLimits           *GoogleAppsDriveLabelsV2betaUserLimits      `json:"userLimits,omitempty"`
}
