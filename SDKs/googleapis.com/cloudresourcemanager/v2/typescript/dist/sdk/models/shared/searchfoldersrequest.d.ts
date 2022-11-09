import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The request message for searching folders.
**/
export declare class SearchFoldersRequest extends SpeakeasyBase {
    pageSize?: number;
    pageToken?: string;
    query?: string;
}
