import { SpeakeasyBase } from "../../../internal/utils";
import { AppProfile } from "./appprofile";
/**
 * Response message for BigtableInstanceAdmin.ListAppProfiles.
**/
export declare class ListAppProfilesResponse extends SpeakeasyBase {
    appProfiles?: AppProfile[];
    failedLocations?: string[];
    nextPageToken?: string;
}
