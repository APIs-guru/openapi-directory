import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Bucket } from "./bucket";
/**
 * A list of buckets.
**/
export declare class Buckets extends SpeakeasyBase {
    items?: Bucket[];
    kind?: string;
    nextPageToken?: string;
}
