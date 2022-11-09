import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LogBucket } from "./logbucket";


// ListBucketsResponse
/** 
 * The response from ListBuckets.
**/
export class ListBucketsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=buckets", elemType: shared.LogBucket })
  buckets?: LogBucket[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
