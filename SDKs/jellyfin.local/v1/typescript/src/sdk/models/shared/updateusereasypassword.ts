import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateUserEasyPassword
/** 
 * The update user easy password request body.
**/
export class UpdateUserEasyPassword extends SpeakeasyBase {
  @Metadata({ data: "json, name=NewPassword" })
  newPassword?: string;

  @Metadata({ data: "json, name=NewPw" })
  newPw?: string;

  @Metadata({ data: "json, name=ResetPassword" })
  resetPassword?: boolean;
}
