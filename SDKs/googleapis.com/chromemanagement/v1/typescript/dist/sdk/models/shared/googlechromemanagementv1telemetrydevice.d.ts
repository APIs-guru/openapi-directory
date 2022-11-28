import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1AudioStatusReport } from "./googlechromemanagementv1audiostatusreport";
import { GoogleChromeManagementV1BatteryInfo } from "./googlechromemanagementv1batteryinfo";
import { GoogleChromeManagementV1BatteryStatusReport } from "./googlechromemanagementv1batterystatusreport";
import { GoogleChromeManagementV1BootPerformanceReport } from "./googlechromemanagementv1bootperformancereport";
import { GoogleChromeManagementV1CpuInfo } from "./googlechromemanagementv1cpuinfo";
import { GoogleChromeManagementV1CpuStatusReport } from "./googlechromemanagementv1cpustatusreport";
import { GoogleChromeManagementV1GraphicsInfo } from "./googlechromemanagementv1graphicsinfo";
import { GoogleChromeManagementV1GraphicsStatusReport } from "./googlechromemanagementv1graphicsstatusreport";
import { GoogleChromeManagementV1MemoryInfo } from "./googlechromemanagementv1memoryinfo";
import { GoogleChromeManagementV1MemoryStatusReport } from "./googlechromemanagementv1memorystatusreport";
import { GoogleChromeManagementV1NetworkDiagnosticsReport } from "./googlechromemanagementv1networkdiagnosticsreport";
import { GoogleChromeManagementV1NetworkInfo } from "./googlechromemanagementv1networkinfo";
import { GoogleChromeManagementV1NetworkStatusReport } from "./googlechromemanagementv1networkstatusreport";
import { GoogleChromeManagementV1OsUpdateStatus } from "./googlechromemanagementv1osupdatestatus";
import { GoogleChromeManagementV1StorageInfo } from "./googlechromemanagementv1storageinfo";
import { GoogleChromeManagementV1StorageStatusReport } from "./googlechromemanagementv1storagestatusreport";
import { GoogleChromeManagementV1ThunderboltInfo } from "./googlechromemanagementv1thunderboltinfo";
/**
 * Telemetry data collected from a managed device.
**/
export declare class GoogleChromeManagementV1TelemetryDevice extends SpeakeasyBase {
    audioStatusReport?: GoogleChromeManagementV1AudioStatusReport[];
    batteryInfo?: GoogleChromeManagementV1BatteryInfo[];
    batteryStatusReport?: GoogleChromeManagementV1BatteryStatusReport[];
    bootPerformanceReport?: GoogleChromeManagementV1BootPerformanceReport[];
    cpuInfo?: GoogleChromeManagementV1CpuInfo[];
    cpuStatusReport?: GoogleChromeManagementV1CpuStatusReport[];
    customer?: string;
    deviceId?: string;
    graphicsInfo?: GoogleChromeManagementV1GraphicsInfo;
    graphicsStatusReport?: GoogleChromeManagementV1GraphicsStatusReport[];
    memoryInfo?: GoogleChromeManagementV1MemoryInfo;
    memoryStatusReport?: GoogleChromeManagementV1MemoryStatusReport[];
    name?: string;
    networkDiagnosticsReport?: GoogleChromeManagementV1NetworkDiagnosticsReport[];
    networkInfo?: GoogleChromeManagementV1NetworkInfo;
    networkStatusReport?: GoogleChromeManagementV1NetworkStatusReport[];
    orgUnitId?: string;
    osUpdateStatus?: GoogleChromeManagementV1OsUpdateStatus[];
    serialNumber?: string;
    storageInfo?: GoogleChromeManagementV1StorageInfo;
    storageStatusReport?: GoogleChromeManagementV1StorageStatusReport[];
    thunderboltInfo?: GoogleChromeManagementV1ThunderboltInfo[];
}
