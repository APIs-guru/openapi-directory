import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServiceAccountDelegationInfo
/** 
 * Identity delegation history of an authenticated service account.
**/
export class ServiceAccountDelegationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=principalEmail" })
  principalEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=principalSubject" })
  principalSubject?: string;
}
