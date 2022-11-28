import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo
/** 
 * Phone Verification info for a StartMfa response.
**/
export class GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sessionInfo" })
  sessionInfo?: string;
}
