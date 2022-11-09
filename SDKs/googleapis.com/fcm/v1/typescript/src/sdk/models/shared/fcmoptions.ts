import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FcmOptions
/** 
 * Platform independent options for features provided by the FCM SDKs.
**/
export class FcmOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=analyticsLabel" })
  analyticsLabel?: string;
}
