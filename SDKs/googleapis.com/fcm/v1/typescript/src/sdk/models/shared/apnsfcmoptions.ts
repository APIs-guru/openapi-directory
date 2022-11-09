import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApnsFcmOptions
/** 
 * Options for features provided by the FCM SDK for iOS.
**/
export class ApnsFcmOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=analyticsLabel" })
  analyticsLabel?: string;

  @Metadata({ data: "json, name=image" })
  image?: string;
}
