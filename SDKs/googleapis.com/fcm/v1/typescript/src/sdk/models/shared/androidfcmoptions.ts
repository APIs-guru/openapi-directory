import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AndroidFcmOptions
/** 
 * Options for features provided by the FCM SDK for Android.
**/
export class AndroidFcmOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=analyticsLabel" })
  analyticsLabel?: string;
}
