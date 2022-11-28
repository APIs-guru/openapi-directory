import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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



// GoogleChromeManagementV1TelemetryDevice
/** 
 * Telemetry data collected from a managed device.
**/
export class GoogleChromeManagementV1TelemetryDevice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audioStatusReport", elemType: GoogleChromeManagementV1AudioStatusReport })
  audioStatusReport?: GoogleChromeManagementV1AudioStatusReport[];

  @SpeakeasyMetadata({ data: "json, name=batteryInfo", elemType: GoogleChromeManagementV1BatteryInfo })
  batteryInfo?: GoogleChromeManagementV1BatteryInfo[];

  @SpeakeasyMetadata({ data: "json, name=batteryStatusReport", elemType: GoogleChromeManagementV1BatteryStatusReport })
  batteryStatusReport?: GoogleChromeManagementV1BatteryStatusReport[];

  @SpeakeasyMetadata({ data: "json, name=bootPerformanceReport", elemType: GoogleChromeManagementV1BootPerformanceReport })
  bootPerformanceReport?: GoogleChromeManagementV1BootPerformanceReport[];

  @SpeakeasyMetadata({ data: "json, name=cpuInfo", elemType: GoogleChromeManagementV1CpuInfo })
  cpuInfo?: GoogleChromeManagementV1CpuInfo[];

  @SpeakeasyMetadata({ data: "json, name=cpuStatusReport", elemType: GoogleChromeManagementV1CpuStatusReport })
  cpuStatusReport?: GoogleChromeManagementV1CpuStatusReport[];

  @SpeakeasyMetadata({ data: "json, name=customer" })
  customer?: string;

  @SpeakeasyMetadata({ data: "json, name=deviceId" })
  deviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=graphicsInfo" })
  graphicsInfo?: GoogleChromeManagementV1GraphicsInfo;

  @SpeakeasyMetadata({ data: "json, name=graphicsStatusReport", elemType: GoogleChromeManagementV1GraphicsStatusReport })
  graphicsStatusReport?: GoogleChromeManagementV1GraphicsStatusReport[];

  @SpeakeasyMetadata({ data: "json, name=memoryInfo" })
  memoryInfo?: GoogleChromeManagementV1MemoryInfo;

  @SpeakeasyMetadata({ data: "json, name=memoryStatusReport", elemType: GoogleChromeManagementV1MemoryStatusReport })
  memoryStatusReport?: GoogleChromeManagementV1MemoryStatusReport[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=networkDiagnosticsReport", elemType: GoogleChromeManagementV1NetworkDiagnosticsReport })
  networkDiagnosticsReport?: GoogleChromeManagementV1NetworkDiagnosticsReport[];

  @SpeakeasyMetadata({ data: "json, name=networkInfo" })
  networkInfo?: GoogleChromeManagementV1NetworkInfo;

  @SpeakeasyMetadata({ data: "json, name=networkStatusReport", elemType: GoogleChromeManagementV1NetworkStatusReport })
  networkStatusReport?: GoogleChromeManagementV1NetworkStatusReport[];

  @SpeakeasyMetadata({ data: "json, name=orgUnitId" })
  orgUnitId?: string;

  @SpeakeasyMetadata({ data: "json, name=osUpdateStatus", elemType: GoogleChromeManagementV1OsUpdateStatus })
  osUpdateStatus?: GoogleChromeManagementV1OsUpdateStatus[];

  @SpeakeasyMetadata({ data: "json, name=serialNumber" })
  serialNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=storageInfo" })
  storageInfo?: GoogleChromeManagementV1StorageInfo;

  @SpeakeasyMetadata({ data: "json, name=storageStatusReport", elemType: GoogleChromeManagementV1StorageStatusReport })
  storageStatusReport?: GoogleChromeManagementV1StorageStatusReport[];

  @SpeakeasyMetadata({ data: "json, name=thunderboltInfo", elemType: GoogleChromeManagementV1ThunderboltInfo })
  thunderboltInfo?: GoogleChromeManagementV1ThunderboltInfo[];
}
