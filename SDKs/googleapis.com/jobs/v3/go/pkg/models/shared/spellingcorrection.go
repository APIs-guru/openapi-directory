package shared

// SpellingCorrection
// Output only. Spell check result.
type SpellingCorrection struct {
	Corrected     *bool   `json:"corrected,omitempty"`
	CorrectedText *string `json:"correctedText,omitempty"`
}
