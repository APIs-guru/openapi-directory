import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Person } from "./person";


// StructuredResult
/** 
 * Structured results that are returned as part of search request.
**/
export class StructuredResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=person" })
  person?: Person;
}
