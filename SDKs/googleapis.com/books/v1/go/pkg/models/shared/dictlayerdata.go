package shared



type DictlayerdataCommon struct {
    Title *string `json:"title,omitempty"`
    
}

type DictlayerdataDictSource struct {
    Attribution *string `json:"attribution,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type DictlayerdataDictWordsDerivativesSource struct {
    Attribution *string `json:"attribution,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type DictlayerdataDictWordsDerivatives struct {
    Source *DictlayerdataDictWordsDerivativesSource `json:"source,omitempty"`
    Text *string `json:"text,omitempty"`
    
}

type DictlayerdataDictWordsExamplesSource struct {
    Attribution *string `json:"attribution,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type DictlayerdataDictWordsExamples struct {
    Source *DictlayerdataDictWordsExamplesSource `json:"source,omitempty"`
    Text *string `json:"text,omitempty"`
    
}

type DictlayerdataDictWordsSensesConjugations struct {
    Type *string `json:"type,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

type DictlayerdataDictWordsSensesDefinitionsExamplesSource struct {
    Attribution *string `json:"attribution,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type DictlayerdataDictWordsSensesDefinitionsExamples struct {
    Source *DictlayerdataDictWordsSensesDefinitionsExamplesSource `json:"source,omitempty"`
    Text *string `json:"text,omitempty"`
    
}

type DictlayerdataDictWordsSensesDefinitions struct {
    Definition *string `json:"definition,omitempty"`
    Examples []DictlayerdataDictWordsSensesDefinitionsExamples `json:"examples,omitempty"`
    
}

type DictlayerdataDictWordsSensesSource struct {
    Attribution *string `json:"attribution,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type DictlayerdataDictWordsSensesSynonymsSource struct {
    Attribution *string `json:"attribution,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type DictlayerdataDictWordsSensesSynonyms struct {
    Source *DictlayerdataDictWordsSensesSynonymsSource `json:"source,omitempty"`
    Text *string `json:"text,omitempty"`
    
}

type DictlayerdataDictWordsSenses struct {
    Conjugations []DictlayerdataDictWordsSensesConjugations `json:"conjugations,omitempty"`
    Definitions []DictlayerdataDictWordsSensesDefinitions `json:"definitions,omitempty"`
    PartOfSpeech *string `json:"partOfSpeech,omitempty"`
    Pronunciation *string `json:"pronunciation,omitempty"`
    PronunciationURL *string `json:"pronunciationUrl,omitempty"`
    Source *DictlayerdataDictWordsSensesSource `json:"source,omitempty"`
    Syllabification *string `json:"syllabification,omitempty"`
    Synonyms []DictlayerdataDictWordsSensesSynonyms `json:"synonyms,omitempty"`
    
}

type DictlayerdataDictWordsSource struct {
    Attribution *string `json:"attribution,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type DictlayerdataDictWords struct {
    Derivatives []DictlayerdataDictWordsDerivatives `json:"derivatives,omitempty"`
    Examples []DictlayerdataDictWordsExamples `json:"examples,omitempty"`
    Senses []DictlayerdataDictWordsSenses `json:"senses,omitempty"`
    Source *DictlayerdataDictWordsSource `json:"source,omitempty"`
    
}

type DictlayerdataDict struct {
    Source *DictlayerdataDictSource `json:"source,omitempty"`
    Words []DictlayerdataDictWords `json:"words,omitempty"`
    
}

type Dictlayerdata struct {
    Common *DictlayerdataCommon `json:"common,omitempty"`
    Dict *DictlayerdataDict `json:"dict,omitempty"`
    Kind *string `json:"kind,omitempty"`
    
}

