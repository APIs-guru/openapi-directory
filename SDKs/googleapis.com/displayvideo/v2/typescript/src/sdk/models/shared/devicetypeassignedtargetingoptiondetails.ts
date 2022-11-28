import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum {
    DeviceTypeUnspecified = "DEVICE_TYPE_UNSPECIFIED",
    DeviceTypeComputer = "DEVICE_TYPE_COMPUTER",
    DeviceTypeConnectedTv = "DEVICE_TYPE_CONNECTED_TV",
    DeviceTypeSmartPhone = "DEVICE_TYPE_SMART_PHONE",
    DeviceTypeTablet = "DEVICE_TYPE_TABLET"
}


// DeviceTypeAssignedTargetingOptionDetailsInput
/** 
 * Targeting details for device type. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_DEVICE_TYPE`.
**/
export class DeviceTypeAssignedTargetingOptionDetailsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceType" })
  deviceType?: DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum;
}


// DeviceTypeAssignedTargetingOptionDetails
/** 
 * Targeting details for device type. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_DEVICE_TYPE`.
**/
export class DeviceTypeAssignedTargetingOptionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceType" })
  deviceType?: DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=youtubeAndPartnersBidMultiplier" })
  youtubeAndPartnersBidMultiplier?: number;
}
