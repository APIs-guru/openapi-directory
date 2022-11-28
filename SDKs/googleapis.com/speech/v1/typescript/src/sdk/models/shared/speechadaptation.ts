import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomClass } from "./customclass";
import { PhraseSet } from "./phraseset";



// SpeechAdaptation
/** 
 * Speech adaptation configuration.
**/
export class SpeechAdaptation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customClasses", elemType: CustomClass })
  customClasses?: CustomClass[];

  @SpeakeasyMetadata({ data: "json, name=phraseSetReferences" })
  phraseSetReferences?: string[];

  @SpeakeasyMetadata({ data: "json, name=phraseSets", elemType: PhraseSet })
  phraseSets?: PhraseSet[];
}
