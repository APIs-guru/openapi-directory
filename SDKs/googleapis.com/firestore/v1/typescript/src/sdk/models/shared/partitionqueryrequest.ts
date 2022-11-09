import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StructuredQuery } from "./structuredquery";


// PartitionQueryRequest
/** 
 * The request for Firestore.PartitionQuery.
**/
export class PartitionQueryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "json, name=partitionCount" })
  partitionCount?: string;

  @Metadata({ data: "json, name=readTime" })
  readTime?: string;

  @Metadata({ data: "json, name=structuredQuery" })
  structuredQuery?: StructuredQuery;
}
