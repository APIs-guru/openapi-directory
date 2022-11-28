import { SpeakeasyBase } from "../../../internal/utils";
import { Folder } from "./folder";
/**
 * The response message for searching folders.
**/
export declare class SearchFoldersResponse extends SpeakeasyBase {
    folders?: Folder[];
    nextPageToken?: string;
}
