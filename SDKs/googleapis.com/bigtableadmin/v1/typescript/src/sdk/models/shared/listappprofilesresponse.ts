import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AppProfile } from "./appprofile";


// ListAppProfilesResponse
/** 
 * Response message for BigtableInstanceAdmin.ListAppProfiles.
**/
export class ListAppProfilesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=appProfiles", elemType: shared.AppProfile })
  appProfiles?: AppProfile[];

  @Metadata({ data: "json, name=failedLocations" })
  failedLocations?: string[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
