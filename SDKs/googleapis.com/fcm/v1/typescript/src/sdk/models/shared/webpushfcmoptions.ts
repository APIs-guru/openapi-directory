import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WebpushFcmOptions
/** 
 * Options for features provided by the FCM SDK for Web.
**/
export class WebpushFcmOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analyticsLabel" })
  analyticsLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;
}
