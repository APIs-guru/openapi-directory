import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionAlgorithmEnum {
    MemoryEncryptionAlgorithmUnspecified = "MEMORY_ENCRYPTION_ALGORITHM_UNSPECIFIED",
    MemoryEncryptionAlgorithmUnknown = "MEMORY_ENCRYPTION_ALGORITHM_UNKNOWN",
    MemoryEncryptionAlgorithmAesXts128 = "MEMORY_ENCRYPTION_ALGORITHM_AES_XTS_128",
    MemoryEncryptionAlgorithmAesXts256 = "MEMORY_ENCRYPTION_ALGORITHM_AES_XTS_256"
}
export declare enum GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionStateEnum {
    MemoryEncryptionStateUnspecified = "MEMORY_ENCRYPTION_STATE_UNSPECIFIED",
    MemoryEncryptionStateUnknown = "MEMORY_ENCRYPTION_STATE_UNKNOWN",
    MemoryEncryptionStateDisabled = "MEMORY_ENCRYPTION_STATE_DISABLED",
    MemoryEncryptionStateTme = "MEMORY_ENCRYPTION_STATE_TME",
    MemoryEncryptionStateMktme = "MEMORY_ENCRYPTION_STATE_MKTME"
}
/**
 * Memory encryption information of a device. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceMemoryInfo](https://chromeenterprise.google/policies/#ReportDeviceMemoryInfo) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A
**/
export declare class GoogleChromeManagementV1TotalMemoryEncryptionInfo extends SpeakeasyBase {
    encryptionAlgorithm?: GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionAlgorithmEnum;
    encryptionState?: GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionStateEnum;
    keyLength?: string;
    maxKeys?: string;
}
