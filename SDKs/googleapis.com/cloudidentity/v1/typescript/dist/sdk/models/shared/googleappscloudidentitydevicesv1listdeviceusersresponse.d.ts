import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAppsCloudidentityDevicesV1DeviceUser } from "./googleappscloudidentitydevicesv1deviceuser";
/**
 * Response message that is returned from the ListDeviceUsers method.
**/
export declare class GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse extends SpeakeasyBase {
    deviceUsers?: GoogleAppsCloudidentityDevicesV1DeviceUser[];
    nextPageToken?: string;
}
