import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAppsCloudidentityDevicesV1ClientState } from "./googleappscloudidentitydevicesv1clientstate";


// GoogleAppsCloudidentityDevicesV1ListClientStatesResponse
/** 
 * Response message that is returned in ListClientStates.
**/
export class GoogleAppsCloudidentityDevicesV1ListClientStatesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientStates", elemType: shared.GoogleAppsCloudidentityDevicesV1ClientState })
  clientStates?: GoogleAppsCloudidentityDevicesV1ClientState[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
