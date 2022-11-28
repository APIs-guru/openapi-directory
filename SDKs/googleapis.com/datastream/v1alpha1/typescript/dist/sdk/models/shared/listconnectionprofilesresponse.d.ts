import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionProfile } from "./connectionprofile";
export declare class ListConnectionProfilesResponse extends SpeakeasyBase {
    connectionProfiles?: ConnectionProfile[];
    nextPageToken?: string;
    unreachable?: string[];
}
