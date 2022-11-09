import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Person } from "./person";


// PeopleSuggestion
/** 
 * This field contains information about the person being suggested.
**/
export class PeopleSuggestion extends SpeakeasyBase {
  @Metadata({ data: "json, name=person" })
  person?: Person;
}
