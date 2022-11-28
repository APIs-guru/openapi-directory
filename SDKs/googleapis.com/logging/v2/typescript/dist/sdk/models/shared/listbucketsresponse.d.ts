import { SpeakeasyBase } from "../../../internal/utils";
import { LogBucket } from "./logbucket";
/**
 * The response from ListBuckets.
**/
export declare class ListBucketsResponse extends SpeakeasyBase {
    buckets?: LogBucket[];
    nextPageToken?: string;
}
