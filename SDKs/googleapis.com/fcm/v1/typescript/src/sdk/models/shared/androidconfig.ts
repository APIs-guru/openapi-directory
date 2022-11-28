import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AndroidFcmOptions } from "./androidfcmoptions";
import { AndroidNotification } from "./androidnotification";


export enum AndroidConfigPriorityEnum {
    Normal = "NORMAL",
    High = "HIGH"
}


// AndroidConfig
/** 
 * Android specific options for messages sent through [FCM connection server](https://goo.gl/4GLdUl).
**/
export class AndroidConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collapseKey" })
  collapseKey?: string;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=directBootOk" })
  directBootOk?: boolean;

  @SpeakeasyMetadata({ data: "json, name=fcmOptions" })
  fcmOptions?: AndroidFcmOptions;

  @SpeakeasyMetadata({ data: "json, name=notification" })
  notification?: AndroidNotification;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: AndroidConfigPriorityEnum;

  @SpeakeasyMetadata({ data: "json, name=restrictedPackageName" })
  restrictedPackageName?: string;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: string;
}
