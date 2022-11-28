import { SpeakeasyBase } from "../../../internal/utils";
import { DatafeedStatusExample } from "./datafeedstatusexample";
/**
 * An error occurring in the feed, like "invalid price".
**/
export declare class DatafeedStatusError extends SpeakeasyBase {
    code?: string;
    count?: string;
    examples?: DatafeedStatusExample[];
    message?: string;
}
