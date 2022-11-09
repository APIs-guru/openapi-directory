import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PhraseSet } from "./phraseset";
/**
 * Message sent by the client for the `CreatePhraseSet` method.
**/
export declare class CreatePhraseSetRequest extends SpeakeasyBase {
    phraseSet?: PhraseSet;
    phraseSetId?: string;
}
