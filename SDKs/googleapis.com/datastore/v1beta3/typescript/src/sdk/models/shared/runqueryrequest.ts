import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GqlQuery } from "./gqlquery";
import { PartitionId } from "./partitionid";
import { Query } from "./query";
import { ReadOptions } from "./readoptions";


// RunQueryRequest
/** 
 * The request for Datastore.RunQuery.
**/
export class RunQueryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=gqlQuery" })
  gqlQuery?: GqlQuery;

  @Metadata({ data: "json, name=partitionId" })
  partitionId?: PartitionId;

  @Metadata({ data: "json, name=query" })
  query?: Query;

  @Metadata({ data: "json, name=readOptions" })
  readOptions?: ReadOptions;
}
