import { SpeakeasyBase } from "../../../internal/utils";
import { Version } from "./version";
/**
 * Response message for ListVersions.
**/
export declare class ListVersionsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    versions?: Version[];
}
