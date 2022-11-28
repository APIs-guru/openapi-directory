import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StructuredQuery } from "./structuredquery";



// PartitionQueryRequest
/** 
 * The request for Firestore.PartitionQuery.
**/
export class PartitionQueryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=partitionCount" })
  partitionCount?: string;

  @SpeakeasyMetadata({ data: "json, name=readTime" })
  readTime?: string;

  @SpeakeasyMetadata({ data: "json, name=structuredQuery" })
  structuredQuery?: StructuredQuery;
}
