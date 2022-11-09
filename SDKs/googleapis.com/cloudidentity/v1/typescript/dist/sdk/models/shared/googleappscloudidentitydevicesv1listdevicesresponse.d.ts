import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAppsCloudidentityDevicesV1Device } from "./googleappscloudidentitydevicesv1device";
/**
 * Response message that is returned from the ListDevices method.
**/
export declare class GoogleAppsCloudidentityDevicesV1ListDevicesResponse extends SpeakeasyBase {
    devices?: GoogleAppsCloudidentityDevicesV1Device[];
    nextPageToken?: string;
}
