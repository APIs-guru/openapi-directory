import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GqlQuery } from "./gqlquery";
import { PartitionId } from "./partitionid";
import { Query } from "./query";
import { ReadOptions } from "./readoptions";



// RunQueryRequest
/** 
 * The request for Datastore.RunQuery.
**/
export class RunQueryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=databaseId" })
  databaseId?: string;

  @SpeakeasyMetadata({ data: "json, name=gqlQuery" })
  gqlQuery?: GqlQuery;

  @SpeakeasyMetadata({ data: "json, name=partitionId" })
  partitionId?: PartitionId;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: Query;

  @SpeakeasyMetadata({ data: "json, name=readOptions" })
  readOptions?: ReadOptions;
}
