import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WebpushFcmOptions } from "./webpushfcmoptions";



// WebpushConfig
/** 
 * [Webpush protocol](https://tools.ietf.org/html/rfc8030) options.
**/
export class WebpushConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=fcmOptions" })
  fcmOptions?: WebpushFcmOptions;

  @SpeakeasyMetadata({ data: "json, name=headers" })
  headers?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=notification" })
  notification?: Map<string, any>;
}
