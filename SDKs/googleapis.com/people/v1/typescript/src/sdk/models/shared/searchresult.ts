import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Person } from "./person";


// SearchResult
/** 
 * A result of a search query.
**/
export class SearchResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=person" })
  person?: Person;
}
