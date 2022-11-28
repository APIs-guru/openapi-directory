import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCloudidentityDevicesV1DeviceUser } from "./googleappscloudidentitydevicesv1deviceuser";



// GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse
/** 
 * Response message that is returned from the ListDeviceUsers method.
**/
export class GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceUsers", elemType: GoogleAppsCloudidentityDevicesV1DeviceUser })
  deviceUsers?: GoogleAppsCloudidentityDevicesV1DeviceUser[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
