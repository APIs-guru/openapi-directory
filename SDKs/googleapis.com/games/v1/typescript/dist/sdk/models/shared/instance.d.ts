import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceAndroidDetails } from "./instanceandroiddetails";
import { InstanceIosDetails } from "./instanceiosdetails";
import { InstanceWebDetails } from "./instancewebdetails";
export declare enum InstancePlatformTypeEnum {
    PlatformTypeUnspecified = "PLATFORM_TYPE_UNSPECIFIED",
    Android = "ANDROID",
    Ios = "IOS",
    WebApp = "WEB_APP"
}
/**
 * The Instance resource.
**/
export declare class Instance extends SpeakeasyBase {
    acquisitionUri?: string;
    androidInstance?: InstanceAndroidDetails;
    iosInstance?: InstanceIosDetails;
    kind?: string;
    name?: string;
    platformType?: InstancePlatformTypeEnum;
    realtimePlay?: boolean;
    turnBasedPlay?: boolean;
    webInstance?: InstanceWebDetails;
}
