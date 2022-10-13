package shared

type GoogleAppsDriveLabelsV2betaFieldLimits struct {
	DateLimits           *GoogleAppsDriveLabelsV2betaDateLimits      `json:"dateLimits"`
	IntegerLimits        *GoogleAppsDriveLabelsV2betaIntegerLimits   `json:"integerLimits"`
	LongTextLimits       *GoogleAppsDriveLabelsV2betaLongTextLimits  `json:"longTextLimits"`
	MaxDescriptionLength *int32                                      `json:"maxDescriptionLength"`
	MaxDisplayNameLength *int32                                      `json:"maxDisplayNameLength"`
	MaxIDLength          *int32                                      `json:"maxIdLength"`
	SelectionLimits      *GoogleAppsDriveLabelsV2betaSelectionLimits `json:"selectionLimits"`
	TextLimits           *GoogleAppsDriveLabelsV2betaTextLimits      `json:"textLimits"`
	UserLimits           *GoogleAppsDriveLabelsV2betaUserLimits      `json:"userLimits"`
}
