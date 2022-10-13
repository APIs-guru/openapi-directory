package shared

type GooglePrivacyDlpV2CharacterMaskConfig struct {
	CharactersToIgnore []GooglePrivacyDlpV2CharsToIgnore `json:"charactersToIgnore"`
	MaskingCharacter   *string                           `json:"maskingCharacter"`
	NumberToMask       *int32                            `json:"numberToMask"`
	ReverseOrder       *bool                             `json:"reverseOrder"`
}
