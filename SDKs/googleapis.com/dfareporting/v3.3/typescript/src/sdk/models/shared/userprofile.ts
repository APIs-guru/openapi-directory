import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UserProfile
/** 
 * A UserProfile resource lets you list all DFA user profiles that are associated with a Google user account. The profile_id needs to be specified in other API requests. 
**/
export class UserProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=accountName" })
  accountName?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=profileId" })
  profileId?: string;

  @Metadata({ data: "json, name=subAccountId" })
  subAccountId?: string;

  @Metadata({ data: "json, name=subAccountName" })
  subAccountName?: string;

  @Metadata({ data: "json, name=userName" })
  userName?: string;
}
