package shared

// Glossary
// Represents a glossary built from user provided data.
type Glossary struct {
	EndTime          *string              `json:"endTime,omitempty"`
	EntryCount       *int32               `json:"entryCount,omitempty"`
	InputConfig      *GlossaryInputConfig `json:"inputConfig,omitempty"`
	LanguageCodesSet *LanguageCodesSet    `json:"languageCodesSet,omitempty"`
	LanguagePair     *LanguageCodePair    `json:"languagePair,omitempty"`
	Name             *string              `json:"name,omitempty"`
	SubmitTime       *string              `json:"submitTime,omitempty"`
}

// GlossaryInput
// Represents a glossary built from user provided data.
type GlossaryInput struct {
	InputConfig      *GlossaryInputConfig `json:"inputConfig,omitempty"`
	LanguageCodesSet *LanguageCodesSet    `json:"languageCodesSet,omitempty"`
	LanguagePair     *LanguageCodePair    `json:"languagePair,omitempty"`
	Name             *string              `json:"name,omitempty"`
}
