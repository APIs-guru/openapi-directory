import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCloudidentityDevicesV1Device } from "./googleappscloudidentitydevicesv1device";



// GoogleAppsCloudidentityDevicesV1ListDevicesResponse
/** 
 * Response message that is returned from the ListDevices method.
**/
export class GoogleAppsCloudidentityDevicesV1ListDevicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devices", elemType: GoogleAppsCloudidentityDevicesV1Device })
  devices?: GoogleAppsCloudidentityDevicesV1Device[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
