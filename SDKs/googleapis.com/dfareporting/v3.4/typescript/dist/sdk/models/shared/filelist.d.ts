import { SpeakeasyBase } from "../../../internal/utils";
import { File } from "./file";
/**
 * List of files for a report.
**/
export declare class FileList extends SpeakeasyBase {
    etag?: string;
    items?: File[];
    kind?: string;
    nextPageToken?: string;
}
