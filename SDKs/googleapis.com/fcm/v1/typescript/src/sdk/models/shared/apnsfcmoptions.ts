import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApnsFcmOptions
/** 
 * Options for features provided by the FCM SDK for iOS.
**/
export class ApnsFcmOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analyticsLabel" })
  analyticsLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;
}
