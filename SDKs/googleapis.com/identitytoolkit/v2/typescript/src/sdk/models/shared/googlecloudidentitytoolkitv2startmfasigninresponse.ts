import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo } from "./googlecloudidentitytoolkitv2startmfaphoneresponseinfo";


// GoogleCloudIdentitytoolkitV2StartMfaSignInResponse
/** 
 * StartMfaSignIn response.
**/
export class GoogleCloudIdentitytoolkitV2StartMfaSignInResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=phoneResponseInfo" })
  phoneResponseInfo?: GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo;
}
