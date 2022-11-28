import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetOobConfirmationCodeResponse
/** 
 * Response of getting a code for user confirmation (reset password, change email etc.).
**/
export class GetOobConfirmationCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=oobCode" })
  oobCode?: string;
}
