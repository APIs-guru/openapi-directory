import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitV2AutoRetrievalInfo } from "./googlecloudidentitytoolkitv2autoretrievalinfo";



// GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo
/** 
 * App Verification info for a StartMfa request.
**/
export class GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoRetrievalInfo" })
  autoRetrievalInfo?: GoogleCloudIdentitytoolkitV2AutoRetrievalInfo;

  @SpeakeasyMetadata({ data: "json, name=iosReceipt" })
  iosReceipt?: string;

  @SpeakeasyMetadata({ data: "json, name=iosSecret" })
  iosSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=recaptchaToken" })
  recaptchaToken?: string;

  @SpeakeasyMetadata({ data: "json, name=safetyNetToken" })
  safetyNetToken?: string;
}
