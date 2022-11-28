import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Bucket } from "./bucket";



// ListBucketsResponse
/** 
 * The response returned by `ListBuckets`.
**/
export class ListBucketsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buckets", elemType: Bucket })
  buckets?: Bucket[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
