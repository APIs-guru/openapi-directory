import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Count
/** 
 * Count of documents that match the query. The `COUNT(*)` aggregation function operates on the entire document so it does not require a field reference.
**/
export class Count extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=upTo" })
  upTo?: string;
}
