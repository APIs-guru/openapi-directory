import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FcmOptions
/** 
 * Platform independent options for features provided by the FCM SDKs.
**/
export class FcmOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analyticsLabel" })
  analyticsLabel?: string;
}
