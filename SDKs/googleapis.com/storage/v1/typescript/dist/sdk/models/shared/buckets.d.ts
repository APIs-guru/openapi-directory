import { SpeakeasyBase } from "../../../internal/utils";
import { Bucket } from "./bucket";
/**
 * A list of buckets.
**/
export declare class Buckets extends SpeakeasyBase {
    items?: Bucket[];
    kind?: string;
    nextPageToken?: string;
}
