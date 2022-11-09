import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetOobConfirmationCodeResponse
/** 
 * Response of getting a code for user confirmation (reset password, change email etc.).
**/
export class GetOobConfirmationCodeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=oobCode" })
  oobCode?: string;
}
