import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WebpushFcmOptions
/** 
 * Options for features provided by the FCM SDK for Web.
**/
export class WebpushFcmOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=analyticsLabel" })
  analyticsLabel?: string;

  @Metadata({ data: "json, name=link" })
  link?: string;
}
