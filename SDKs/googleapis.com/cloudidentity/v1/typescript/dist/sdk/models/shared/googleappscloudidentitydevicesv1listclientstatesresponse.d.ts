import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCloudidentityDevicesV1ClientState } from "./googleappscloudidentitydevicesv1clientstate";
/**
 * Response message that is returned in ListClientStates.
**/
export declare class GoogleAppsCloudidentityDevicesV1ListClientStatesResponse extends SpeakeasyBase {
    clientStates?: GoogleAppsCloudidentityDevicesV1ClientState[];
    nextPageToken?: string;
}
