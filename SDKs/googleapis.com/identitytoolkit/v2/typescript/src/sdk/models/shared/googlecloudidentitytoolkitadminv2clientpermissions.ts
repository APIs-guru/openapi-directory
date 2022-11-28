import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudIdentitytoolkitAdminV2ClientPermissions
/** 
 * Configuration related to restricting a user's ability to affect their account.
**/
export class GoogleCloudIdentitytoolkitAdminV2ClientPermissions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disabledUserDeletion" })
  disabledUserDeletion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=disabledUserSignup" })
  disabledUserSignup?: boolean;
}
