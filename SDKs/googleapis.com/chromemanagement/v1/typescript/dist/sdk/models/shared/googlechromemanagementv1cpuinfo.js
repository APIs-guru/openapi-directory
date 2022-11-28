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
export var GoogleChromeManagementV1CpuInfoArchitectureEnum;
(function (GoogleChromeManagementV1CpuInfoArchitectureEnum) {
    GoogleChromeManagementV1CpuInfoArchitectureEnum["ArchitectureUnspecified"] = "ARCHITECTURE_UNSPECIFIED";
    GoogleChromeManagementV1CpuInfoArchitectureEnum["X64"] = "X64";
})(GoogleChromeManagementV1CpuInfoArchitectureEnum || (GoogleChromeManagementV1CpuInfoArchitectureEnum = {}));
// GoogleChromeManagementV1CpuInfo
/**
 * CPU specifications for the device * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceCpuInfo](https://chromeenterprise.google/policies/#ReportDeviceCpuInfo) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
**/
var GoogleChromeManagementV1CpuInfo = /** @class */ (function (_super) {
    __extends(GoogleChromeManagementV1CpuInfo, _super);
    function GoogleChromeManagementV1CpuInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=architecture" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1CpuInfo.prototype, "architecture", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keylockerConfigured" }),
        __metadata("design:type", Boolean)
    ], GoogleChromeManagementV1CpuInfo.prototype, "keylockerConfigured", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keylockerSupported" }),
        __metadata("design:type", Boolean)
    ], GoogleChromeManagementV1CpuInfo.prototype, "keylockerSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxClockSpeed" }),
        __metadata("design:type", Number)
    ], GoogleChromeManagementV1CpuInfo.prototype, "maxClockSpeed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=model" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1CpuInfo.prototype, "model", void 0);
    return GoogleChromeManagementV1CpuInfo;
}(SpeakeasyBase));
export { GoogleChromeManagementV1CpuInfo };
