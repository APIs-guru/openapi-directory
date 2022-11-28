package shared

// CharacterMaskConfig
// Mask a string by replacing its characters with a fixed character.
type CharacterMaskConfig struct {
	MaskingCharacter *string `json:"maskingCharacter,omitempty"`
}
