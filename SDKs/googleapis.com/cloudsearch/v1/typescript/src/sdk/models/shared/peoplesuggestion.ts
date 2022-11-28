import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Person } from "./person";



// PeopleSuggestion
/** 
 * This field contains information about the person being suggested.
**/
export class PeopleSuggestion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=person" })
  person?: Person;
}
