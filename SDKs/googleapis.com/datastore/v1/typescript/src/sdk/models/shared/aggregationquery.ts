import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Aggregation } from "./aggregation";
import { Query } from "./query";



// AggregationQuery
/** 
 * Datastore query for running an aggregation over a Query.
**/
export class AggregationQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregations", elemType: Aggregation })
  aggregations?: Aggregation[];

  @SpeakeasyMetadata({ data: "json, name=nestedQuery" })
  nestedQuery?: Query;
}
