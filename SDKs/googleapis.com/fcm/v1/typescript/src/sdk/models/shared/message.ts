import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=android" })
  android?: AndroidConfig;

  @SpeakeasyMetadata({ data: "json, name=apns" })
  apns?: ApnsConfig;

  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: string;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=fcmOptions" })
  fcmOptions?: FcmOptions;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notification" })
  notification?: Notification;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;

  @SpeakeasyMetadata({ data: "json, name=webpush" })
  webpush?: WebpushConfig;
}
