package shared

type Glossary struct {
	EndTime          *string              `json:"endTime"`
	EntryCount       *int32               `json:"entryCount"`
	InputConfig      *GlossaryInputConfig `json:"inputConfig"`
	LanguageCodesSet *LanguageCodesSet    `json:"languageCodesSet"`
	LanguagePair     *LanguageCodePair    `json:"languagePair"`
	Name             *string              `json:"name"`
	SubmitTime       *string              `json:"submitTime"`
}
