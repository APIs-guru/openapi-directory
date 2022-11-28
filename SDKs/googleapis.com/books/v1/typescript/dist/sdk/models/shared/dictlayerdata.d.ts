import { SpeakeasyBase } from "../../../internal/utils";
export declare class DictlayerdataCommon extends SpeakeasyBase {
    title?: string;
}
/**
 * The source, url and attribution for this dictionary data.
**/
export declare class DictlayerdataDictSource extends SpeakeasyBase {
    attribution?: string;
    url?: string;
}
export declare class DictlayerdataDictWordsDerivativesSource extends SpeakeasyBase {
    attribution?: string;
    url?: string;
}
export declare class DictlayerdataDictWordsDerivatives extends SpeakeasyBase {
    source?: DictlayerdataDictWordsDerivativesSource;
    text?: string;
}
export declare class DictlayerdataDictWordsExamplesSource extends SpeakeasyBase {
    attribution?: string;
    url?: string;
}
export declare class DictlayerdataDictWordsExamples extends SpeakeasyBase {
    source?: DictlayerdataDictWordsExamplesSource;
    text?: string;
}
export declare class DictlayerdataDictWordsSensesConjugations extends SpeakeasyBase {
    type?: string;
    value?: string;
}
export declare class DictlayerdataDictWordsSensesDefinitionsExamplesSource extends SpeakeasyBase {
    attribution?: string;
    url?: string;
}
export declare class DictlayerdataDictWordsSensesDefinitionsExamples extends SpeakeasyBase {
    source?: DictlayerdataDictWordsSensesDefinitionsExamplesSource;
    text?: string;
}
export declare class DictlayerdataDictWordsSensesDefinitions extends SpeakeasyBase {
    definition?: string;
    examples?: DictlayerdataDictWordsSensesDefinitionsExamples[];
}
export declare class DictlayerdataDictWordsSensesSource extends SpeakeasyBase {
    attribution?: string;
    url?: string;
}
export declare class DictlayerdataDictWordsSensesSynonymsSource extends SpeakeasyBase {
    attribution?: string;
    url?: string;
}
export declare class DictlayerdataDictWordsSensesSynonyms extends SpeakeasyBase {
    source?: DictlayerdataDictWordsSensesSynonymsSource;
    text?: string;
}
export declare class DictlayerdataDictWordsSenses extends SpeakeasyBase {
    conjugations?: DictlayerdataDictWordsSensesConjugations[];
    definitions?: DictlayerdataDictWordsSensesDefinitions[];
    partOfSpeech?: string;
    pronunciation?: string;
    pronunciationUrl?: string;
    source?: DictlayerdataDictWordsSensesSource;
    syllabification?: string;
    synonyms?: DictlayerdataDictWordsSensesSynonyms[];
}
/**
 * The words with different meanings but not related words, e.g. "go" (game) and "go" (verb).
**/
export declare class DictlayerdataDictWordsSource extends SpeakeasyBase {
    attribution?: string;
    url?: string;
}
export declare class DictlayerdataDictWords extends SpeakeasyBase {
    derivatives?: DictlayerdataDictWordsDerivatives[];
    examples?: DictlayerdataDictWordsExamples[];
    senses?: DictlayerdataDictWordsSenses[];
    source?: DictlayerdataDictWordsSource;
}
export declare class DictlayerdataDict extends SpeakeasyBase {
    source?: DictlayerdataDictSource;
    words?: DictlayerdataDictWords[];
}
export declare class Dictlayerdata extends SpeakeasyBase {
    common?: DictlayerdataCommon;
    dict?: DictlayerdataDict;
    kind?: string;
}
