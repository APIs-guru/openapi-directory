import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountUserProfile } from "./accountuserprofile";



// AccountUserProfilesListResponse
/** 
 * Account User Profile List Response
**/
export class AccountUserProfilesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountUserProfiles", elemType: AccountUserProfile })
  accountUserProfiles?: AccountUserProfile[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
