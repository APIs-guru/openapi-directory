import { SpeakeasyBase } from "../../../internal/utils";
import { PeopleSuggestion } from "./peoplesuggestion";
import { Source } from "./source";
/**
 * One suggestion result.
**/
export declare class SuggestResult extends SpeakeasyBase {
    peopleSuggestion?: PeopleSuggestion;
    querySuggestion?: Map<string, any>;
    source?: Source;
    suggestedQuery?: string;
}
