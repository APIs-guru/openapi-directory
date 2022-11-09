import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccountUserProfile } from "./accountuserprofile";


// AccountUserProfilesListResponse
/** 
 * Account User Profile List Response
**/
export class AccountUserProfilesListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountUserProfiles", elemType: shared.AccountUserProfile })
  accountUserProfiles?: AccountUserProfile[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
