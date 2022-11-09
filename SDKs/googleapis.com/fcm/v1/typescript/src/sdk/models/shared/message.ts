import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AndroidConfig } from "./androidconfig";
import { ApnsConfig } from "./apnsconfig";
import { FcmOptions } from "./fcmoptions";
import { Notification } from "./notification";
import { WebpushConfig } from "./webpushconfig";


// Message
/** 
 * Message to send by Firebase Cloud Messaging Service.
**/
export class Message extends SpeakeasyBase {
  @Metadata({ data: "json, name=android" })
  android?: AndroidConfig;

  @Metadata({ data: "json, name=apns" })
  apns?: ApnsConfig;

  @Metadata({ data: "json, name=condition" })
  condition?: string;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, string>;

  @Metadata({ data: "json, name=fcmOptions" })
  fcmOptions?: FcmOptions;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notification" })
  notification?: Notification;

  @Metadata({ data: "json, name=token" })
  token?: string;

  @Metadata({ data: "json, name=topic" })
  topic?: string;

  @Metadata({ data: "json, name=webpush" })
  webpush?: WebpushConfig;
}
