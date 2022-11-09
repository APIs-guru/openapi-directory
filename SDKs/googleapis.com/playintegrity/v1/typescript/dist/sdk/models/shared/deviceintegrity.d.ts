import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum DeviceIntegrityDeviceRecognitionVerdictEnum {
    Unknown = "UNKNOWN",
    MeetsBasicIntegrity = "MEETS_BASIC_INTEGRITY",
    MeetsDeviceIntegrity = "MEETS_DEVICE_INTEGRITY",
    MeetsStrongIntegrity = "MEETS_STRONG_INTEGRITY",
    MeetsVirtualIntegrity = "MEETS_VIRTUAL_INTEGRITY"
}
/**
 * Contains the device attestation information.
**/
export declare class DeviceIntegrity extends SpeakeasyBase {
    deviceRecognitionVerdict?: DeviceIntegrityDeviceRecognitionVerdictEnum[];
}
