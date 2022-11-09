import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PeopleSuggestion } from "./peoplesuggestion";
import { Source } from "./source";


// SuggestResult
/** 
 * One suggestion result.
**/
export class SuggestResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=peopleSuggestion" })
  peopleSuggestion?: PeopleSuggestion;

  @Metadata({ data: "json, name=querySuggestion" })
  querySuggestion?: Map<string, any>;

  @Metadata({ data: "json, name=source" })
  source?: Source;

  @Metadata({ data: "json, name=suggestedQuery" })
  suggestedQuery?: string;
}
