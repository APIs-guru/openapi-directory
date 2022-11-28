import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppProfile } from "./appprofile";



// ListAppProfilesResponse
/** 
 * Response message for BigtableInstanceAdmin.ListAppProfiles.
**/
export class ListAppProfilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appProfiles", elemType: AppProfile })
  appProfiles?: AppProfile[];

  @SpeakeasyMetadata({ data: "json, name=failedLocations" })
  failedLocations?: string[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
