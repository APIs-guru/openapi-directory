import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResetPasswordResponse
/** 
 * Response of resetting the password.
**/
export class ResetPasswordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=newEmail" })
  newEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=requestType" })
  requestType?: string;
}
