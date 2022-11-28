import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AggregationQuery } from "./aggregationquery";
import { GqlQuery } from "./gqlquery";
import { PartitionId } from "./partitionid";
import { ReadOptions } from "./readoptions";



// RunAggregationQueryRequest
/** 
 * The request for Datastore.RunAggregationQuery.
**/
export class RunAggregationQueryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregationQuery" })
  aggregationQuery?: AggregationQuery;

  @SpeakeasyMetadata({ data: "json, name=gqlQuery" })
  gqlQuery?: GqlQuery;

  @SpeakeasyMetadata({ data: "json, name=partitionId" })
  partitionId?: PartitionId;

  @SpeakeasyMetadata({ data: "json, name=readOptions" })
  readOptions?: ReadOptions;
}
