import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceAndroidDetails } from "./instanceandroiddetails";
import { InstanceIosDetails } from "./instanceiosdetails";
import { InstanceWebDetails } from "./instancewebdetails";

export enum InstancePlatformTypeEnum {
    PlatformTypeUnspecified = "PLATFORM_TYPE_UNSPECIFIED"
,    Android = "ANDROID"
,    Ios = "IOS"
,    WebApp = "WEB_APP"
}


// Instance
/** 
 * The Instance resource.
**/
export class Instance extends SpeakeasyBase {
  @Metadata({ data: "json, name=acquisitionUri" })
  acquisitionUri?: string;

  @Metadata({ data: "json, name=androidInstance" })
  androidInstance?: InstanceAndroidDetails;

  @Metadata({ data: "json, name=iosInstance" })
  iosInstance?: InstanceIosDetails;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=platformType" })
  platformType?: InstancePlatformTypeEnum;

  @Metadata({ data: "json, name=realtimePlay" })
  realtimePlay?: boolean;

  @Metadata({ data: "json, name=turnBasedPlay" })
  turnBasedPlay?: boolean;

  @Metadata({ data: "json, name=webInstance" })
  webInstance?: InstanceWebDetails;
}
