import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AndroidFcmOptions
/** 
 * Options for features provided by the FCM SDK for Android.
**/
export class AndroidFcmOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analyticsLabel" })
  analyticsLabel?: string;
}
