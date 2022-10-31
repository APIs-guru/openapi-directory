package shared



type Glossary struct {
    EndTime *string `json:"endTime,omitempty"`
    EntryCount *int32 `json:"entryCount,omitempty"`
    InputConfig *GlossaryInputConfig `json:"inputConfig,omitempty"`
    LanguageCodesSet *LanguageCodesSet `json:"languageCodesSet,omitempty"`
    LanguagePair *LanguageCodePair `json:"languagePair,omitempty"`
    Name *string `json:"name,omitempty"`
    SubmitTime *string `json:"submitTime,omitempty"`
    
}

