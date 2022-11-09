import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAppsCloudidentityDevicesV1Device } from "./googleappscloudidentitydevicesv1device";


// GoogleAppsCloudidentityDevicesV1ListDevicesResponse
/** 
 * Response message that is returned from the ListDevices method.
**/
export class GoogleAppsCloudidentityDevicesV1ListDevicesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=devices", elemType: shared.GoogleAppsCloudidentityDevicesV1Device })
  devices?: GoogleAppsCloudidentityDevicesV1Device[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
