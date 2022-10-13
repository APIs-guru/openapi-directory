package shared

type SpellingCorrection struct {
	Corrected     *bool   `json:"corrected"`
	CorrectedHTML *string `json:"correctedHtml"`
	CorrectedText *string `json:"correctedText"`
}
