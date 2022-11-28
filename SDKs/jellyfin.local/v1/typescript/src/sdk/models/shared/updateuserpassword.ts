import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateUserPassword
/** 
 * The update user password request body.
**/
export class UpdateUserPassword extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CurrentPassword" })
  currentPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=CurrentPw" })
  currentPw?: string;

  @SpeakeasyMetadata({ data: "json, name=NewPw" })
  newPw?: string;

  @SpeakeasyMetadata({ data: "json, name=ResetPassword" })
  resetPassword?: boolean;
}
