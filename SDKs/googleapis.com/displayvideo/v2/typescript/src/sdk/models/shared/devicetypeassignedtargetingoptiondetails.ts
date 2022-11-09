import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum {
    DeviceTypeUnspecified = "DEVICE_TYPE_UNSPECIFIED"
,    DeviceTypeComputer = "DEVICE_TYPE_COMPUTER"
,    DeviceTypeConnectedTv = "DEVICE_TYPE_CONNECTED_TV"
,    DeviceTypeSmartPhone = "DEVICE_TYPE_SMART_PHONE"
,    DeviceTypeTablet = "DEVICE_TYPE_TABLET"
}


// DeviceTypeAssignedTargetingOptionDetails
/** 
 * Targeting details for device type. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_DEVICE_TYPE`.
**/
export class DeviceTypeAssignedTargetingOptionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceType" })
  deviceType?: DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum;

  @Metadata({ data: "json, name=youtubeAndPartnersBidMultiplier" })
  youtubeAndPartnersBidMultiplier?: number;
}
