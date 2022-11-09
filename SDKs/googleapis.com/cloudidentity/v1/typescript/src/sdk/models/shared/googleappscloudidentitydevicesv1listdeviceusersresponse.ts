import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAppsCloudidentityDevicesV1DeviceUser } from "./googleappscloudidentitydevicesv1deviceuser";


// GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse
/** 
 * Response message that is returned from the ListDeviceUsers method.
**/
export class GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceUsers", elemType: shared.GoogleAppsCloudidentityDevicesV1DeviceUser })
  deviceUsers?: GoogleAppsCloudidentityDevicesV1DeviceUser[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
