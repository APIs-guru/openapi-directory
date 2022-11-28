import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LogBucket } from "./logbucket";



// ListBucketsResponse
/** 
 * The response from ListBuckets.
**/
export class ListBucketsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buckets", elemType: LogBucket })
  buckets?: LogBucket[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
