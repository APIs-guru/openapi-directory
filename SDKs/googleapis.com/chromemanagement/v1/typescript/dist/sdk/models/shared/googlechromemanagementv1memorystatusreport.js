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
// GoogleChromeManagementV1MemoryStatusReport
/**
 * Contains samples of memory status reports. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceMemoryInfo](https://chromeenterprise.google/policies/#ReportDeviceMemoryInfo) * Data Collection Frequency: Only at upload, SystemRamFreeByes is collected every 10 minutes * Default Data Reporting Frequency: Every 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
**/
var GoogleChromeManagementV1MemoryStatusReport = /** @class */ (function (_super) {
    __extends(GoogleChromeManagementV1MemoryStatusReport, _super);
    function GoogleChromeManagementV1MemoryStatusReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageFaults" }),
        __metadata("design:type", Number)
    ], GoogleChromeManagementV1MemoryStatusReport.prototype, "pageFaults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reportTime" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1MemoryStatusReport.prototype, "reportTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sampleFrequency" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1MemoryStatusReport.prototype, "sampleFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=systemRamFreeBytes" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1MemoryStatusReport.prototype, "systemRamFreeBytes", void 0);
    return GoogleChromeManagementV1MemoryStatusReport;
}(SpeakeasyBase));
export { GoogleChromeManagementV1MemoryStatusReport };
