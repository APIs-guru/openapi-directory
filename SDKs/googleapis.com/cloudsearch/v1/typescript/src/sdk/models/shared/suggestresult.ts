import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PeopleSuggestion } from "./peoplesuggestion";
import { Source } from "./source";



// SuggestResult
/** 
 * One suggestion result.
**/
export class SuggestResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=peopleSuggestion" })
  peopleSuggestion?: PeopleSuggestion;

  @SpeakeasyMetadata({ data: "json, name=querySuggestion" })
  querySuggestion?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: Source;

  @SpeakeasyMetadata({ data: "json, name=suggestedQuery" })
  suggestedQuery?: string;
}
