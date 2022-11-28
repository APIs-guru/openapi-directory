import { SpeakeasyBase } from "../../../internal/utils";
import { File } from "./file";
/**
 * A list of files.
**/
export declare class FileList extends SpeakeasyBase {
    files?: File[];
    incompleteSearch?: boolean;
    kind?: string;
    nextPageToken?: string;
}
