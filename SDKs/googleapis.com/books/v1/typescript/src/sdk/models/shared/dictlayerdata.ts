import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DictlayerdataCommon extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


// DictlayerdataDictSource
/** 
 * The source, url and attribution for this dictionary data.
**/
export class DictlayerdataDictSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attribution" })
  attribution?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class DictlayerdataDictWordsDerivativesSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attribution" })
  attribution?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class DictlayerdataDictWordsDerivatives extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: DictlayerdataDictWordsDerivativesSource;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}


export class DictlayerdataDictWordsExamplesSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attribution" })
  attribution?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class DictlayerdataDictWordsExamples extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: DictlayerdataDictWordsExamplesSource;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}


export class DictlayerdataDictWordsSensesConjugations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class DictlayerdataDictWordsSensesDefinitionsExamplesSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attribution" })
  attribution?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class DictlayerdataDictWordsSensesDefinitionsExamples extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: DictlayerdataDictWordsSensesDefinitionsExamplesSource;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}


export class DictlayerdataDictWordsSensesDefinitions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=definition" })
  definition?: string;

  @SpeakeasyMetadata({ data: "json, name=examples", elemType: DictlayerdataDictWordsSensesDefinitionsExamples })
  examples?: DictlayerdataDictWordsSensesDefinitionsExamples[];
}


export class DictlayerdataDictWordsSensesSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attribution" })
  attribution?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class DictlayerdataDictWordsSensesSynonymsSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attribution" })
  attribution?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class DictlayerdataDictWordsSensesSynonyms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: DictlayerdataDictWordsSensesSynonymsSource;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}


export class DictlayerdataDictWordsSenses extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conjugations", elemType: DictlayerdataDictWordsSensesConjugations })
  conjugations?: DictlayerdataDictWordsSensesConjugations[];

  @SpeakeasyMetadata({ data: "json, name=definitions", elemType: DictlayerdataDictWordsSensesDefinitions })
  definitions?: DictlayerdataDictWordsSensesDefinitions[];

  @SpeakeasyMetadata({ data: "json, name=partOfSpeech" })
  partOfSpeech?: string;

  @SpeakeasyMetadata({ data: "json, name=pronunciation" })
  pronunciation?: string;

  @SpeakeasyMetadata({ data: "json, name=pronunciationUrl" })
  pronunciationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: DictlayerdataDictWordsSensesSource;

  @SpeakeasyMetadata({ data: "json, name=syllabification" })
  syllabification?: string;

  @SpeakeasyMetadata({ data: "json, name=synonyms", elemType: DictlayerdataDictWordsSensesSynonyms })
  synonyms?: DictlayerdataDictWordsSensesSynonyms[];
}


// DictlayerdataDictWordsSource
/** 
 * The words with different meanings but not related words, e.g. "go" (game) and "go" (verb).
**/
export class DictlayerdataDictWordsSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attribution" })
  attribution?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class DictlayerdataDictWords extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=derivatives", elemType: DictlayerdataDictWordsDerivatives })
  derivatives?: DictlayerdataDictWordsDerivatives[];

  @SpeakeasyMetadata({ data: "json, name=examples", elemType: DictlayerdataDictWordsExamples })
  examples?: DictlayerdataDictWordsExamples[];

  @SpeakeasyMetadata({ data: "json, name=senses", elemType: DictlayerdataDictWordsSenses })
  senses?: DictlayerdataDictWordsSenses[];

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: DictlayerdataDictWordsSource;
}


export class DictlayerdataDict extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: DictlayerdataDictSource;

  @SpeakeasyMetadata({ data: "json, name=words", elemType: DictlayerdataDictWords })
  words?: DictlayerdataDictWords[];
}


export class Dictlayerdata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=common" })
  common?: DictlayerdataCommon;

  @SpeakeasyMetadata({ data: "json, name=dict" })
  dict?: DictlayerdataDict;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
