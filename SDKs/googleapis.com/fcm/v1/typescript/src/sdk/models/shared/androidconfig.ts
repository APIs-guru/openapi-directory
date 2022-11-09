import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AndroidFcmOptions } from "./androidfcmoptions";
import { AndroidNotification } from "./androidnotification";

export enum AndroidConfigPriorityEnum {
    Normal = "NORMAL"
,    High = "HIGH"
}


// AndroidConfig
/** 
 * Android specific options for messages sent through [FCM connection server](https://goo.gl/4GLdUl).
**/
export class AndroidConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=collapseKey" })
  collapseKey?: string;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, string>;

  @Metadata({ data: "json, name=directBootOk" })
  directBootOk?: boolean;

  @Metadata({ data: "json, name=fcmOptions" })
  fcmOptions?: AndroidFcmOptions;

  @Metadata({ data: "json, name=notification" })
  notification?: AndroidNotification;

  @Metadata({ data: "json, name=priority" })
  priority?: AndroidConfigPriorityEnum;

  @Metadata({ data: "json, name=restrictedPackageName" })
  restrictedPackageName?: string;

  @Metadata({ data: "json, name=ttl" })
  ttl?: string;
}
