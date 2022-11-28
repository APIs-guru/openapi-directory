import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserProfile
/** 
 * A UserProfile resource lets you list all DFA user profiles that are associated with a Google user account. The profile_id needs to be specified in other API requests. 
**/
export class UserProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=accountName" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=profileId" })
  profileId?: string;

  @SpeakeasyMetadata({ data: "json, name=subAccountId" })
  subAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=subAccountName" })
  subAccountName?: string;

  @SpeakeasyMetadata({ data: "json, name=userName" })
  userName?: string;
}
