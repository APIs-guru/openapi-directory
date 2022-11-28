import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceAndroidDetails } from "./instanceandroiddetails";
import { InstanceIosDetails } from "./instanceiosdetails";
import { InstanceWebDetails } from "./instancewebdetails";


export enum InstancePlatformTypeEnum {
    PlatformTypeUnspecified = "PLATFORM_TYPE_UNSPECIFIED",
    Android = "ANDROID",
    Ios = "IOS",
    WebApp = "WEB_APP"
}


// Instance
/** 
 * The Instance resource.
**/
export class Instance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acquisitionUri" })
  acquisitionUri?: string;

  @SpeakeasyMetadata({ data: "json, name=androidInstance" })
  androidInstance?: InstanceAndroidDetails;

  @SpeakeasyMetadata({ data: "json, name=iosInstance" })
  iosInstance?: InstanceIosDetails;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=platformType" })
  platformType?: InstancePlatformTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=realtimePlay" })
  realtimePlay?: boolean;

  @SpeakeasyMetadata({ data: "json, name=turnBasedPlay" })
  turnBasedPlay?: boolean;

  @SpeakeasyMetadata({ data: "json, name=webInstance" })
  webInstance?: InstanceWebDetails;
}
