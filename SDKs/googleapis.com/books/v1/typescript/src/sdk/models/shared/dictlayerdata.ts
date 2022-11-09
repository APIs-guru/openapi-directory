import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DictlayerdataCommon extends SpeakeasyBase {
  @Metadata({ data: "json, name=title" })
  title?: string;
}


// DictlayerdataDictSource
/** 
 * The source, url and attribution for this dictionary data.
**/
export class DictlayerdataDictSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=attribution" })
  attribution?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class DictlayerdataDictWordsDerivativesSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=attribution" })
  attribution?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class DictlayerdataDictWordsDerivatives extends SpeakeasyBase {
  @Metadata({ data: "json, name=source" })
  source?: DictlayerdataDictWordsDerivativesSource;

  @Metadata({ data: "json, name=text" })
  text?: string;
}


export class DictlayerdataDictWordsExamplesSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=attribution" })
  attribution?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class DictlayerdataDictWordsExamples extends SpeakeasyBase {
  @Metadata({ data: "json, name=source" })
  source?: DictlayerdataDictWordsExamplesSource;

  @Metadata({ data: "json, name=text" })
  text?: string;
}


export class DictlayerdataDictWordsSensesConjugations extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class DictlayerdataDictWordsSensesDefinitionsExamplesSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=attribution" })
  attribution?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class DictlayerdataDictWordsSensesDefinitionsExamples extends SpeakeasyBase {
  @Metadata({ data: "json, name=source" })
  source?: DictlayerdataDictWordsSensesDefinitionsExamplesSource;

  @Metadata({ data: "json, name=text" })
  text?: string;
}


export class DictlayerdataDictWordsSensesDefinitions extends SpeakeasyBase {
  @Metadata({ data: "json, name=definition" })
  definition?: string;

  @Metadata({ data: "json, name=examples", elemType: shared.DictlayerdataDictWordsSensesDefinitionsExamples })
  examples?: DictlayerdataDictWordsSensesDefinitionsExamples[];
}


export class DictlayerdataDictWordsSensesSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=attribution" })
  attribution?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class DictlayerdataDictWordsSensesSynonymsSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=attribution" })
  attribution?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class DictlayerdataDictWordsSensesSynonyms extends SpeakeasyBase {
  @Metadata({ data: "json, name=source" })
  source?: DictlayerdataDictWordsSensesSynonymsSource;

  @Metadata({ data: "json, name=text" })
  text?: string;
}


export class DictlayerdataDictWordsSenses extends SpeakeasyBase {
  @Metadata({ data: "json, name=conjugations", elemType: shared.DictlayerdataDictWordsSensesConjugations })
  conjugations?: DictlayerdataDictWordsSensesConjugations[];

  @Metadata({ data: "json, name=definitions", elemType: shared.DictlayerdataDictWordsSensesDefinitions })
  definitions?: DictlayerdataDictWordsSensesDefinitions[];

  @Metadata({ data: "json, name=partOfSpeech" })
  partOfSpeech?: string;

  @Metadata({ data: "json, name=pronunciation" })
  pronunciation?: string;

  @Metadata({ data: "json, name=pronunciationUrl" })
  pronunciationUrl?: string;

  @Metadata({ data: "json, name=source" })
  source?: DictlayerdataDictWordsSensesSource;

  @Metadata({ data: "json, name=syllabification" })
  syllabification?: string;

  @Metadata({ data: "json, name=synonyms", elemType: shared.DictlayerdataDictWordsSensesSynonyms })
  synonyms?: DictlayerdataDictWordsSensesSynonyms[];
}


// DictlayerdataDictWordsSource
/** 
 * The words with different meanings but not related words, e.g. "go" (game) and "go" (verb).
**/
export class DictlayerdataDictWordsSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=attribution" })
  attribution?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class DictlayerdataDictWords extends SpeakeasyBase {
  @Metadata({ data: "json, name=derivatives", elemType: shared.DictlayerdataDictWordsDerivatives })
  derivatives?: DictlayerdataDictWordsDerivatives[];

  @Metadata({ data: "json, name=examples", elemType: shared.DictlayerdataDictWordsExamples })
  examples?: DictlayerdataDictWordsExamples[];

  @Metadata({ data: "json, name=senses", elemType: shared.DictlayerdataDictWordsSenses })
  senses?: DictlayerdataDictWordsSenses[];

  @Metadata({ data: "json, name=source" })
  source?: DictlayerdataDictWordsSource;
}


export class DictlayerdataDict extends SpeakeasyBase {
  @Metadata({ data: "json, name=source" })
  source?: DictlayerdataDictSource;

  @Metadata({ data: "json, name=words", elemType: shared.DictlayerdataDictWords })
  words?: DictlayerdataDictWords[];
}


export class Dictlayerdata extends SpeakeasyBase {
  @Metadata({ data: "json, name=common" })
  common?: DictlayerdataCommon;

  @Metadata({ data: "json, name=dict" })
  dict?: DictlayerdataDict;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
