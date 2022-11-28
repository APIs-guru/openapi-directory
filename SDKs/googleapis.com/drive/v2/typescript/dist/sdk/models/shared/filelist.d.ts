import { SpeakeasyBase } from "../../../internal/utils";
import { File } from "./file";
/**
 * A list of files.
**/
export declare class FileList extends SpeakeasyBase {
    etag?: string;
    incompleteSearch?: boolean;
    items?: File[];
    kind?: string;
    nextLink?: string;
    nextPageToken?: string;
    selfLink?: string;
}
