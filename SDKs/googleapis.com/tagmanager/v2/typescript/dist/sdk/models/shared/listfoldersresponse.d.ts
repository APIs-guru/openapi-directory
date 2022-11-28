import { SpeakeasyBase } from "../../../internal/utils";
import { Folder } from "./folder";
/**
 * List Folders Response.
**/
export declare class ListFoldersResponse extends SpeakeasyBase {
    folder?: Folder[];
    nextPageToken?: string;
}
