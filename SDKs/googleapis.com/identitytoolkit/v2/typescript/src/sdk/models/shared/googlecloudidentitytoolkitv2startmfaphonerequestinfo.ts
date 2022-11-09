import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIdentitytoolkitV2AutoRetrievalInfo } from "./googlecloudidentitytoolkitv2autoretrievalinfo";


// GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo
/** 
 * App Verification info for a StartMfa request.
**/
export class GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoRetrievalInfo" })
  autoRetrievalInfo?: GoogleCloudIdentitytoolkitV2AutoRetrievalInfo;

  @Metadata({ data: "json, name=iosReceipt" })
  iosReceipt?: string;

  @Metadata({ data: "json, name=iosSecret" })
  iosSecret?: string;

  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=recaptchaToken" })
  recaptchaToken?: string;

  @Metadata({ data: "json, name=safetyNetToken" })
  safetyNetToken?: string;
}
