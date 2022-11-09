import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomClass } from "./customclass";
import { PhraseSet } from "./phraseset";


// SpeechAdaptation
/** 
 * Speech adaptation configuration.
**/
export class SpeechAdaptation extends SpeakeasyBase {
  @Metadata({ data: "json, name=customClasses", elemType: shared.CustomClass })
  customClasses?: CustomClass[];

  @Metadata({ data: "json, name=phraseSetReferences" })
  phraseSetReferences?: string[];

  @Metadata({ data: "json, name=phraseSets", elemType: shared.PhraseSet })
  phraseSets?: PhraseSet[];
}
