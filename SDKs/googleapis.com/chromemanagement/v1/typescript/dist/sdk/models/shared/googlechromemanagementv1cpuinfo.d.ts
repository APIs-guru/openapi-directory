import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleChromeManagementV1CpuInfoArchitectureEnum {
    ArchitectureUnspecified = "ARCHITECTURE_UNSPECIFIED",
    X64 = "X64"
}
/**
 * CPU specifications for the device * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceCpuInfo](https://chromeenterprise.google/policies/#ReportDeviceCpuInfo) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
**/
export declare class GoogleChromeManagementV1CpuInfo extends SpeakeasyBase {
    architecture?: GoogleChromeManagementV1CpuInfoArchitectureEnum;
    keylockerConfigured?: boolean;
    keylockerSupported?: boolean;
    maxClockSpeed?: number;
    model?: string;
}
