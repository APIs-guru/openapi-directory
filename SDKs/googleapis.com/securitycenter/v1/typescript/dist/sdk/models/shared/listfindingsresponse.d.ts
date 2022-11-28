import { SpeakeasyBase } from "../../../internal/utils";
import { ListFindingsResult } from "./listfindingsresult";
/**
 * Response message for listing findings.
**/
export declare class ListFindingsResponse extends SpeakeasyBase {
    listFindingsResults?: ListFindingsResult[];
    nextPageToken?: string;
    readTime?: string;
    totalSize?: number;
}
