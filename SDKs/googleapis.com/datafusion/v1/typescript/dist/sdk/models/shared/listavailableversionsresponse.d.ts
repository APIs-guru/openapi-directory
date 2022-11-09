import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Version } from "./version";
/**
 * Response message for the list available versions request.
**/
export declare class ListAvailableVersionsResponse extends SpeakeasyBase {
    availableVersions?: Version[];
    nextPageToken?: string;
}
