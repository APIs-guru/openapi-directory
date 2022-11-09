import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Bucket } from "./bucket";
/**
 * The response returned by `ListBuckets`.
**/
export declare class ListBucketsResponse extends SpeakeasyBase {
    buckets?: Bucket[];
    nextPageToken?: string;
}
