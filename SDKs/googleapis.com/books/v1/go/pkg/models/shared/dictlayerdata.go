package shared

type DictlayerdataCommon struct {
	Title *string `json:"title"`
}

type DictlayerdataDictSource struct {
	Attribution *string `json:"attribution"`
	URL         *string `json:"url"`
}

type DictlayerdataDictWordsDerivativesSource struct {
	Attribution *string `json:"attribution"`
	URL         *string `json:"url"`
}

type DictlayerdataDictWordsDerivatives struct {
	Source *DictlayerdataDictWordsDerivativesSource `json:"source"`
	Text   *string                                  `json:"text"`
}

type DictlayerdataDictWordsExamplesSource struct {
	Attribution *string `json:"attribution"`
	URL         *string `json:"url"`
}

type DictlayerdataDictWordsExamples struct {
	Source *DictlayerdataDictWordsExamplesSource `json:"source"`
	Text   *string                               `json:"text"`
}

type DictlayerdataDictWordsSensesConjugations struct {
	Type  *string `json:"type"`
	Value *string `json:"value"`
}

type DictlayerdataDictWordsSensesDefinitionsExamplesSource struct {
	Attribution *string `json:"attribution"`
	URL         *string `json:"url"`
}

type DictlayerdataDictWordsSensesDefinitionsExamples struct {
	Source *DictlayerdataDictWordsSensesDefinitionsExamplesSource `json:"source"`
	Text   *string                                                `json:"text"`
}

type DictlayerdataDictWordsSensesDefinitions struct {
	Definition *string                                           `json:"definition"`
	Examples   []DictlayerdataDictWordsSensesDefinitionsExamples `json:"examples"`
}

type DictlayerdataDictWordsSensesSource struct {
	Attribution *string `json:"attribution"`
	URL         *string `json:"url"`
}

type DictlayerdataDictWordsSensesSynonymsSource struct {
	Attribution *string `json:"attribution"`
	URL         *string `json:"url"`
}

type DictlayerdataDictWordsSensesSynonyms struct {
	Source *DictlayerdataDictWordsSensesSynonymsSource `json:"source"`
	Text   *string                                     `json:"text"`
}

type DictlayerdataDictWordsSenses struct {
	Conjugations     []DictlayerdataDictWordsSensesConjugations `json:"conjugations"`
	Definitions      []DictlayerdataDictWordsSensesDefinitions  `json:"definitions"`
	PartOfSpeech     *string                                    `json:"partOfSpeech"`
	Pronunciation    *string                                    `json:"pronunciation"`
	PronunciationURL *string                                    `json:"pronunciationUrl"`
	Source           *DictlayerdataDictWordsSensesSource        `json:"source"`
	Syllabification  *string                                    `json:"syllabification"`
	Synonyms         []DictlayerdataDictWordsSensesSynonyms     `json:"synonyms"`
}

type DictlayerdataDictWordsSource struct {
	Attribution *string `json:"attribution"`
	URL         *string `json:"url"`
}

type DictlayerdataDictWords struct {
	Derivatives []DictlayerdataDictWordsDerivatives `json:"derivatives"`
	Examples    []DictlayerdataDictWordsExamples    `json:"examples"`
	Senses      []DictlayerdataDictWordsSenses      `json:"senses"`
	Source      *DictlayerdataDictWordsSource       `json:"source"`
}

type DictlayerdataDict struct {
	Source *DictlayerdataDictSource `json:"source"`
	Words  []DictlayerdataDictWords `json:"words"`
}

type Dictlayerdata struct {
	Common *DictlayerdataCommon `json:"common"`
	Dict   *DictlayerdataDict   `json:"dict"`
	Kind   *string              `json:"kind"`
}
