import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DeviceTypeTargetingOptionDetailsDeviceTypeEnum {
    DeviceTypeUnspecified = "DEVICE_TYPE_UNSPECIFIED"
,    DeviceTypeComputer = "DEVICE_TYPE_COMPUTER"
,    DeviceTypeConnectedTv = "DEVICE_TYPE_CONNECTED_TV"
,    DeviceTypeSmartPhone = "DEVICE_TYPE_SMART_PHONE"
,    DeviceTypeTablet = "DEVICE_TYPE_TABLET"
}


// DeviceTypeTargetingOptionDetails
/** 
 * Represents a targetable device type. This will be populated in the device_type_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_DEVICE_TYPE`.
**/
export class DeviceTypeTargetingOptionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceType" })
  deviceType?: DeviceTypeTargetingOptionDetailsDeviceTypeEnum;
}
