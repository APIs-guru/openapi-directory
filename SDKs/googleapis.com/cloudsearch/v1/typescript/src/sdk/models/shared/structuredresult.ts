import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Person } from "./person";



// StructuredResult
/** 
 * Structured results that are returned as part of search request.
**/
export class StructuredResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=person" })
  person?: Person;
}
