package shared

type GooglePrivacyDlpV2SensitivityScoreScoreEnum string

const (
	GooglePrivacyDlpV2SensitivityScoreScoreEnumSensitivityScoreUnspecified GooglePrivacyDlpV2SensitivityScoreScoreEnum = "SENSITIVITY_SCORE_UNSPECIFIED"
	GooglePrivacyDlpV2SensitivityScoreScoreEnumSensitivityLow              GooglePrivacyDlpV2SensitivityScoreScoreEnum = "SENSITIVITY_LOW"
	GooglePrivacyDlpV2SensitivityScoreScoreEnumSensitivityModerate         GooglePrivacyDlpV2SensitivityScoreScoreEnum = "SENSITIVITY_MODERATE"
	GooglePrivacyDlpV2SensitivityScoreScoreEnumSensitivityHigh             GooglePrivacyDlpV2SensitivityScoreScoreEnum = "SENSITIVITY_HIGH"
)

// GooglePrivacyDlpV2SensitivityScore
// Score is a summary of all elements in the data profile. A higher number means more sensitive.
type GooglePrivacyDlpV2SensitivityScore struct {
	Score *GooglePrivacyDlpV2SensitivityScoreScoreEnum `json:"score,omitempty"`
}
