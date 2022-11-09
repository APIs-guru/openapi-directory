import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ServiceAccountDelegationInfo
/** 
 * Identity delegation history of an authenticated service account.
**/
export class ServiceAccountDelegationInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=principalEmail" })
  principalEmail?: string;

  @Metadata({ data: "json, name=principalSubject" })
  principalSubject?: string;
}
