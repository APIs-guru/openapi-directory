import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo } from "./googlecloudidentitytoolkitv2startmfaphoneresponseinfo";



// GoogleCloudIdentitytoolkitV2StartMfaSignInResponse
/** 
 * StartMfaSignIn response.
**/
export class GoogleCloudIdentitytoolkitV2StartMfaSignInResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=phoneResponseInfo" })
  phoneResponseInfo?: GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo;
}
