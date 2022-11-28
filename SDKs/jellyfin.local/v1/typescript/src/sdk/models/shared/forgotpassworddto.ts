import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ForgotPasswordDto
/** 
 * Forgot Password request body DTO.
**/
export class ForgotPasswordDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EnteredUsername" })
  enteredUsername: string;
}
