import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateUserEasyPassword
/** 
 * The update user easy password request body.
**/
export class UpdateUserEasyPassword extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NewPassword" })
  newPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=NewPw" })
  newPw?: string;

  @SpeakeasyMetadata({ data: "json, name=ResetPassword" })
  resetPassword?: boolean;
}
