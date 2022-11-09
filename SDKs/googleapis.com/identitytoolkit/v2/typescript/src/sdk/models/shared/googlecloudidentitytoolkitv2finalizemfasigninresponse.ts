import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo } from "./googlecloudidentitytoolkitv2finalizemfaphoneresponseinfo";


// GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse
/** 
 * FinalizeMfaSignIn response.
**/
export class GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=idToken" })
  idToken?: string;

  @Metadata({ data: "json, name=phoneAuthInfo" })
  phoneAuthInfo?: GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo;

  @Metadata({ data: "json, name=refreshToken" })
  refreshToken?: string;
}
