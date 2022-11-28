import { SpeakeasyBase } from "../../../internal/utils";
import { Version } from "./version";
/**
 * Response with the list of the versions for the specified script project.
**/
export declare class ListVersionsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    versions?: Version[];
}
