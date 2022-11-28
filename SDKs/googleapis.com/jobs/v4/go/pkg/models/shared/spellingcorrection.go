package shared

// SpellingCorrection
// Spell check result.
type SpellingCorrection struct {
	Corrected     *bool   `json:"corrected,omitempty"`
	CorrectedHTML *string `json:"correctedHtml,omitempty"`
	CorrectedText *string `json:"correctedText,omitempty"`
}
