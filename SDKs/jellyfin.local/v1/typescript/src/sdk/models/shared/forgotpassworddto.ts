import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ForgotPasswordDto
/** 
 * Forgot Password request body DTO.
**/
export class ForgotPasswordDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=EnteredUsername" })
  enteredUsername: string;
}
