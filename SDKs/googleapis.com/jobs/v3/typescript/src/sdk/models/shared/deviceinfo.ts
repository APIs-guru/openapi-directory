import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DeviceInfoDeviceTypeEnum {
    DeviceTypeUnspecified = "DEVICE_TYPE_UNSPECIFIED",
    Web = "WEB",
    MobileWeb = "MOBILE_WEB",
    Android = "ANDROID",
    Ios = "IOS",
    Bot = "BOT",
    Other = "OTHER"
}


// DeviceInfo
/** 
 * Device information collected from the job seeker, candidate, or other entity conducting the job search. Providing this information improves the quality of the search results across devices.
**/
export class DeviceInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceType" })
  deviceType?: DeviceInfoDeviceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
