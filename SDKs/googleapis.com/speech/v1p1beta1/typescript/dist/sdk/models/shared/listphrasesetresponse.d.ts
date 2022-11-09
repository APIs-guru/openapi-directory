import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PhraseSet } from "./phraseset";
/**
 * Message returned to the client by the `ListPhraseSet` method.
**/
export declare class ListPhraseSetResponse extends SpeakeasyBase {
    nextPageToken?: string;
    phraseSets?: PhraseSet[];
}
