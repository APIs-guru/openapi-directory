import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleChromeManagementV1BootPerformanceReportShutdownReasonEnum {
    ShutdownReasonUnspecified = "SHUTDOWN_REASON_UNSPECIFIED",
    UserRequest = "USER_REQUEST",
    SystemUpdate = "SYSTEM_UPDATE",
    LowBattery = "LOW_BATTERY",
    Other = "OTHER"
}
/**
 * Boot performance report of a device. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceBootMode](https://chromeenterprise.google/policies/#ReportDeviceBootMode) * Data Collection Frequency: On every boot up event * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A
**/
export declare class GoogleChromeManagementV1BootPerformanceReport extends SpeakeasyBase {
    bootUpDuration?: string;
    bootUpTime?: string;
    reportTime?: string;
    shutdownDuration?: string;
    shutdownReason?: GoogleChromeManagementV1BootPerformanceReportShutdownReasonEnum;
    shutdownTime?: string;
}
