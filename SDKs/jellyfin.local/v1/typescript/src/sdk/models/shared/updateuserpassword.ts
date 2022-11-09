import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateUserPassword
/** 
 * The update user password request body.
**/
export class UpdateUserPassword extends SpeakeasyBase {
  @Metadata({ data: "json, name=CurrentPassword" })
  currentPassword?: string;

  @Metadata({ data: "json, name=CurrentPw" })
  currentPw?: string;

  @Metadata({ data: "json, name=NewPw" })
  newPw?: string;

  @Metadata({ data: "json, name=ResetPassword" })
  resetPassword?: boolean;
}
