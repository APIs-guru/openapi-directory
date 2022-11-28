import { SpeakeasyBase } from "../../../internal/utils";
import { GroupResult } from "./groupresult";
/**
 * Response message for group by findings.
**/
export declare class GroupFindingsResponse extends SpeakeasyBase {
    groupByResults?: GroupResult[];
    nextPageToken?: string;
    readTime?: string;
    totalSize?: number;
}
