import { SpeakeasyBase } from "../../../internal/utils";
import { CustomClass } from "./customclass";
import { PhraseSet } from "./phraseset";
/**
 * Speech adaptation configuration.
**/
export declare class SpeechAdaptation extends SpeakeasyBase {
    customClasses?: CustomClass[];
    phraseSetReferences?: string[];
    phraseSets?: PhraseSet[];
}
