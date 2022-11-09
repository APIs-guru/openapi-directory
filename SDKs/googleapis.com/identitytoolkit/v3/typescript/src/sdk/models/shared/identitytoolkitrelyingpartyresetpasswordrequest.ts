import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IdentitytoolkitRelyingpartyResetPasswordRequest
/** 
 * Request to reset the password.
**/
export class IdentitytoolkitRelyingpartyResetPasswordRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=newPassword" })
  newPassword?: string;

  @Metadata({ data: "json, name=oldPassword" })
  oldPassword?: string;

  @Metadata({ data: "json, name=oobCode" })
  oobCode?: string;
}
