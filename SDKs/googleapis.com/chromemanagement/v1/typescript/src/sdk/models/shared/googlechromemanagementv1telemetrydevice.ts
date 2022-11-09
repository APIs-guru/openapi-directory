import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=audioStatusReport", elemType: shared.GoogleChromeManagementV1AudioStatusReport })
  audioStatusReport?: GoogleChromeManagementV1AudioStatusReport[];

  @Metadata({ data: "json, name=batteryInfo", elemType: shared.GoogleChromeManagementV1BatteryInfo })
  batteryInfo?: GoogleChromeManagementV1BatteryInfo[];

  @Metadata({ data: "json, name=batteryStatusReport", elemType: shared.GoogleChromeManagementV1BatteryStatusReport })
  batteryStatusReport?: GoogleChromeManagementV1BatteryStatusReport[];

  @Metadata({ data: "json, name=bootPerformanceReport", elemType: shared.GoogleChromeManagementV1BootPerformanceReport })
  bootPerformanceReport?: GoogleChromeManagementV1BootPerformanceReport[];

  @Metadata({ data: "json, name=cpuInfo", elemType: shared.GoogleChromeManagementV1CpuInfo })
  cpuInfo?: GoogleChromeManagementV1CpuInfo[];

  @Metadata({ data: "json, name=cpuStatusReport", elemType: shared.GoogleChromeManagementV1CpuStatusReport })
  cpuStatusReport?: GoogleChromeManagementV1CpuStatusReport[];

  @Metadata({ data: "json, name=customer" })
  customer?: string;

  @Metadata({ data: "json, name=deviceId" })
  deviceId?: string;

  @Metadata({ data: "json, name=graphicsInfo" })
  graphicsInfo?: GoogleChromeManagementV1GraphicsInfo;

  @Metadata({ data: "json, name=graphicsStatusReport", elemType: shared.GoogleChromeManagementV1GraphicsStatusReport })
  graphicsStatusReport?: GoogleChromeManagementV1GraphicsStatusReport[];

  @Metadata({ data: "json, name=memoryInfo" })
  memoryInfo?: GoogleChromeManagementV1MemoryInfo;

  @Metadata({ data: "json, name=memoryStatusReport", elemType: shared.GoogleChromeManagementV1MemoryStatusReport })
  memoryStatusReport?: GoogleChromeManagementV1MemoryStatusReport[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=networkDiagnosticsReport", elemType: shared.GoogleChromeManagementV1NetworkDiagnosticsReport })
  networkDiagnosticsReport?: GoogleChromeManagementV1NetworkDiagnosticsReport[];

  @Metadata({ data: "json, name=networkInfo" })
  networkInfo?: GoogleChromeManagementV1NetworkInfo;

  @Metadata({ data: "json, name=networkStatusReport", elemType: shared.GoogleChromeManagementV1NetworkStatusReport })
  networkStatusReport?: GoogleChromeManagementV1NetworkStatusReport[];

  @Metadata({ data: "json, name=orgUnitId" })
  orgUnitId?: string;

  @Metadata({ data: "json, name=osUpdateStatus", elemType: shared.GoogleChromeManagementV1OsUpdateStatus })
  osUpdateStatus?: GoogleChromeManagementV1OsUpdateStatus[];

  @Metadata({ data: "json, name=serialNumber" })
  serialNumber?: string;

  @Metadata({ data: "json, name=storageInfo" })
  storageInfo?: GoogleChromeManagementV1StorageInfo;

  @Metadata({ data: "json, name=storageStatusReport", elemType: shared.GoogleChromeManagementV1StorageStatusReport })
  storageStatusReport?: GoogleChromeManagementV1StorageStatusReport[];

  @Metadata({ data: "json, name=thunderboltInfo", elemType: shared.GoogleChromeManagementV1ThunderboltInfo })
  thunderboltInfo?: GoogleChromeManagementV1ThunderboltInfo[];
}
