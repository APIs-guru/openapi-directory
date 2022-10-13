package shared

type SpellingCorrection struct {
	Corrected     *bool   `json:"corrected"`
	CorrectedText *string `json:"correctedText"`
}
