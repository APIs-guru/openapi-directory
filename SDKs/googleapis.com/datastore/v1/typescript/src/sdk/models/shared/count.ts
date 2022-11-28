import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Count
/** 
 * Count of entities that match the query. The `COUNT(*)` aggregation function operates on the entire entity so it does not require a field reference.
**/
export class Count extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=upTo" })
  upTo?: string;
}
