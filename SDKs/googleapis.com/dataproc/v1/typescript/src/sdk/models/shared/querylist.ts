import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// QueryList
/** 
 * A list of queries to run on a cluster.
**/
export class QueryList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=queries" })
  queries?: string[];
}
