import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The parameters to ListLogEntries.
**/
export declare class ListLogEntriesRequest extends SpeakeasyBase {
    filter?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    projectIds?: string[];
    resourceNames?: string[];
}
