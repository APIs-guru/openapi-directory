import { SpeakeasyBase } from "../../../internal/utils";
import { LogExclusion } from "./logexclusion";
/**
 * Result returned from ListExclusions.
**/
export declare class ListExclusionsResponse extends SpeakeasyBase {
    exclusions?: LogExclusion[];
    nextPageToken?: string;
}
