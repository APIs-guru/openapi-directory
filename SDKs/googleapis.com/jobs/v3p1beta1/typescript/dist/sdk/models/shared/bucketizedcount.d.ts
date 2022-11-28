import { SpeakeasyBase } from "../../../internal/utils";
import { BucketRange } from "./bucketrange";
/**
 * Represents count of jobs within one bucket.
**/
export declare class BucketizedCount extends SpeakeasyBase {
    count?: number;
    range?: BucketRange;
}
