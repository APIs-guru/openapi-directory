import { SpeakeasyBase } from "../../../internal/utils";
import { AndroidFcmOptions } from "./androidfcmoptions";
import { AndroidNotification } from "./androidnotification";
export declare enum AndroidConfigPriorityEnum {
    Normal = "NORMAL",
    High = "HIGH"
}
/**
 * Android specific options for messages sent through [FCM connection server](https://goo.gl/4GLdUl).
**/
export declare class AndroidConfig extends SpeakeasyBase {
    collapseKey?: string;
    data?: Map<string, string>;
    directBootOk?: boolean;
    fcmOptions?: AndroidFcmOptions;
    notification?: AndroidNotification;
    priority?: AndroidConfigPriorityEnum;
    restrictedPackageName?: string;
    ttl?: string;
}
