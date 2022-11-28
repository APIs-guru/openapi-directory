import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IdentitytoolkitRelyingpartyResetPasswordRequest
/** 
 * Request to reset the password.
**/
export class IdentitytoolkitRelyingpartyResetPasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=newPassword" })
  newPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=oldPassword" })
  oldPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=oobCode" })
  oobCode?: string;
}
