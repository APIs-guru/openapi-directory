package shared



type GooglePrivacyDlpV2CharacterMaskConfig struct {
    CharactersToIgnore []GooglePrivacyDlpV2CharsToIgnore `json:"charactersToIgnore,omitempty"`
    MaskingCharacter *string `json:"maskingCharacter,omitempty"`
    NumberToMask *int32 `json:"numberToMask,omitempty"`
    ReverseOrder *bool `json:"reverseOrder,omitempty"`
    
}

