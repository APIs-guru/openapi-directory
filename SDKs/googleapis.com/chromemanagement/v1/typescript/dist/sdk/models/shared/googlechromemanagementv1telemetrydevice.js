var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
var GoogleChromeManagementV1TelemetryDevice = /** @class */ (function (_super) {
    __extends(GoogleChromeManagementV1TelemetryDevice, _super);
    function GoogleChromeManagementV1TelemetryDevice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audioStatusReport", elemType: GoogleChromeManagementV1AudioStatusReport }),
        __metadata("design:type", Array)
    ], GoogleChromeManagementV1TelemetryDevice.prototype, "audioStatusReport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=batteryInfo", elemType: GoogleChromeManagementV1BatteryInfo }),
        __metadata("design:type", Array)
    ], GoogleChromeManagementV1TelemetryDevice.prototype, "batteryInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=batteryStatusReport", elemType: GoogleChromeManagementV1BatteryStatusReport }),
        __metadata("design:type", Array)
    ], GoogleChromeManagementV1TelemetryDevice.prototype, "batteryStatusReport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bootPerformanceReport", elemType: GoogleChromeManagementV1BootPerformanceReport }),
        __metadata("design:type", Array)
    ], GoogleChromeManagementV1TelemetryDevice.prototype, "bootPerformanceReport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cpuInfo", elemType: GoogleChromeManagementV1CpuInfo }),
        __metadata("design:type", Array)
    ], GoogleChromeManagementV1TelemetryDevice.prototype, "cpuInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cpuStatusReport", elemType: GoogleChromeManagementV1CpuStatusReport }),
        __metadata("design:type", Array)
    ], GoogleChromeManagementV1TelemetryDevice.prototype, "cpuStatusReport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customer" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1TelemetryDevice.prototype, "customer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceId" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1TelemetryDevice.prototype, "deviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=graphicsInfo" }),
        __metadata("design:type", GoogleChromeManagementV1GraphicsInfo)
    ], GoogleChromeManagementV1TelemetryDevice.prototype, "graphicsInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=graphicsStatusReport", elemType: GoogleChromeManagementV1GraphicsStatusReport }),
        __metadata("design:type", Array)
    ], GoogleChromeManagementV1TelemetryDevice.prototype, "graphicsStatusReport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memoryInfo" }),
        __metadata("design:type", GoogleChromeManagementV1MemoryInfo)
    ], GoogleChromeManagementV1TelemetryDevice.prototype, "memoryInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memoryStatusReport", elemType: GoogleChromeManagementV1MemoryStatusReport }),
        __metadata("design:type", Array)
    ], GoogleChromeManagementV1TelemetryDevice.prototype, "memoryStatusReport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1TelemetryDevice.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkDiagnosticsReport", elemType: GoogleChromeManagementV1NetworkDiagnosticsReport }),
        __metadata("design:type", Array)
    ], GoogleChromeManagementV1TelemetryDevice.prototype, "networkDiagnosticsReport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkInfo" }),
        __metadata("design:type", GoogleChromeManagementV1NetworkInfo)
    ], GoogleChromeManagementV1TelemetryDevice.prototype, "networkInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkStatusReport", elemType: GoogleChromeManagementV1NetworkStatusReport }),
        __metadata("design:type", Array)
    ], GoogleChromeManagementV1TelemetryDevice.prototype, "networkStatusReport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orgUnitId" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1TelemetryDevice.prototype, "orgUnitId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=osUpdateStatus", elemType: GoogleChromeManagementV1OsUpdateStatus }),
        __metadata("design:type", Array)
    ], GoogleChromeManagementV1TelemetryDevice.prototype, "osUpdateStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serialNumber" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1TelemetryDevice.prototype, "serialNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storageInfo" }),
        __metadata("design:type", GoogleChromeManagementV1StorageInfo)
    ], GoogleChromeManagementV1TelemetryDevice.prototype, "storageInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storageStatusReport", elemType: GoogleChromeManagementV1StorageStatusReport }),
        __metadata("design:type", Array)
    ], GoogleChromeManagementV1TelemetryDevice.prototype, "storageStatusReport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thunderboltInfo", elemType: GoogleChromeManagementV1ThunderboltInfo }),
        __metadata("design:type", Array)
    ], GoogleChromeManagementV1TelemetryDevice.prototype, "thunderboltInfo", void 0);
    return GoogleChromeManagementV1TelemetryDevice;
}(SpeakeasyBase));
export { GoogleChromeManagementV1TelemetryDevice };
