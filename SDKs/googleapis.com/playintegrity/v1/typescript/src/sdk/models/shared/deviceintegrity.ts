import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DeviceIntegrityDeviceRecognitionVerdictEnum {
    Unknown = "UNKNOWN",
    MeetsBasicIntegrity = "MEETS_BASIC_INTEGRITY",
    MeetsDeviceIntegrity = "MEETS_DEVICE_INTEGRITY",
    MeetsStrongIntegrity = "MEETS_STRONG_INTEGRITY",
    MeetsVirtualIntegrity = "MEETS_VIRTUAL_INTEGRITY"
}


// DeviceIntegrity
/** 
 * Contains the device attestation information.
**/
export class DeviceIntegrity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceRecognitionVerdict" })
  deviceRecognitionVerdict?: DeviceIntegrityDeviceRecognitionVerdictEnum[];
}
