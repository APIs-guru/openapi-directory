import { SpeakeasyBase } from "../../../internal/utils";
import { VersionFile } from "./versionfile";
export declare class ListVersionFilesResponse extends SpeakeasyBase {
    files?: VersionFile[];
    nextPageToken?: string;
}
