import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Person } from "./person";



// SearchResult
/** 
 * A result of a search query.
**/
export class SearchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=person" })
  person?: Person;
}
