import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionProfile } from "./connectionprofile";
/**
 * Response message for listing connection profiles.
**/
export declare class ListConnectionProfilesResponse extends SpeakeasyBase {
    connectionProfiles?: ConnectionProfile[];
    nextPageToken?: string;
    unreachable?: string[];
}
