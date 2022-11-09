import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// QueryList
/** 
 * A list of queries to run on a cluster.
**/
export class QueryList extends SpeakeasyBase {
  @Metadata({ data: "json, name=queries" })
  queries?: string[];
}
