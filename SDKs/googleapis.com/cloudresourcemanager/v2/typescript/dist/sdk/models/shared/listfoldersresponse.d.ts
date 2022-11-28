import { SpeakeasyBase } from "../../../internal/utils";
import { Folder } from "./folder";
/**
 * The ListFolders response message.
**/
export declare class ListFoldersResponse extends SpeakeasyBase {
    folders?: Folder[];
    nextPageToken?: string;
}
