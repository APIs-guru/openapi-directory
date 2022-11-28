import { SpeakeasyBase } from "../../../internal/utils";
import { AndroidConfig } from "./androidconfig";
import { ApnsConfig } from "./apnsconfig";
import { FcmOptions } from "./fcmoptions";
import { Notification } from "./notification";
import { WebpushConfig } from "./webpushconfig";
/**
 * Message to send by Firebase Cloud Messaging Service.
**/
export declare class Message extends SpeakeasyBase {
    android?: AndroidConfig;
    apns?: ApnsConfig;
    condition?: string;
    data?: Map<string, string>;
    fcmOptions?: FcmOptions;
    name?: string;
    notification?: Notification;
    token?: string;
    topic?: string;
    webpush?: WebpushConfig;
}
