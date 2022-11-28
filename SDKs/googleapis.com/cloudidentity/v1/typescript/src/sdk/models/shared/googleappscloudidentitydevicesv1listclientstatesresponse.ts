import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCloudidentityDevicesV1ClientState } from "./googleappscloudidentitydevicesv1clientstate";



// GoogleAppsCloudidentityDevicesV1ListClientStatesResponse
/** 
 * Response message that is returned in ListClientStates.
**/
export class GoogleAppsCloudidentityDevicesV1ListClientStatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientStates", elemType: GoogleAppsCloudidentityDevicesV1ClientState })
  clientStates?: GoogleAppsCloudidentityDevicesV1ClientState[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
