import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WebpushFcmOptions } from "./webpushfcmoptions";


// WebpushConfig
/** 
 * [Webpush protocol](https://tools.ietf.org/html/rfc8030) options.
**/
export class WebpushConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Map<string, string>;

  @Metadata({ data: "json, name=fcmOptions" })
  fcmOptions?: WebpushFcmOptions;

  @Metadata({ data: "json, name=headers" })
  headers?: Map<string, string>;

  @Metadata({ data: "json, name=notification" })
  notification?: Map<string, any>;
}
