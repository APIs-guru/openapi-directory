import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResetPasswordResponse
/** 
 * Response of resetting the password.
**/
export class ResetPasswordResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=newEmail" })
  newEmail?: string;

  @Metadata({ data: "json, name=requestType" })
  requestType?: string;
}
