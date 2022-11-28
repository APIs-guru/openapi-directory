import { SpeakeasyBase } from "../../../internal/utils";
import { GroupResult } from "./groupresult";
/**
 * Response message for grouping by assets.
**/
export declare class GroupAssetsResponse extends SpeakeasyBase {
    groupByResults?: GroupResult[];
    nextPageToken?: string;
    readTime?: string;
}
