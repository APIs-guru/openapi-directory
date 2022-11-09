import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudIdentitytoolkitAdminV2ClientPermissions
/** 
 * Configuration related to restricting a user's ability to affect their account.
**/
export class GoogleCloudIdentitytoolkitAdminV2ClientPermissions extends SpeakeasyBase {
  @Metadata({ data: "json, name=disabledUserDeletion" })
  disabledUserDeletion?: boolean;

  @Metadata({ data: "json, name=disabledUserSignup" })
  disabledUserSignup?: boolean;
}
