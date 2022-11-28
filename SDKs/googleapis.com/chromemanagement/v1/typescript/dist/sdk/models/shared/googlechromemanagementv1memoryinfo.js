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
import { GoogleChromeManagementV1TotalMemoryEncryptionInfo } from "./googlechromemanagementv1totalmemoryencryptioninfo";
// GoogleChromeManagementV1MemoryInfo
/**
 * Memory information of a device. * This field has both telemetry and device information: - `totalRamBytes` - Device information - `availableRamBytes` - Telemetry information - `totalMemoryEncryption` - Device information * Data for this field is controlled via policy: [ReportDeviceMemoryInfo](https://chromeenterprise.google/policies/#ReportDeviceMemoryInfo) * Data Collection Frequency: - `totalRamBytes` - Only at upload - `availableRamBytes` - Every 10 minutes - `totalMemoryEncryption` - at device startup * Default Data Reporting Frequency: - `totalRamBytes` - 3 hours - `availableRamBytes` - 3 hours - `totalMemoryEncryption` - at device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: only for `totalMemoryEncryption` * Reported for affiliated users only: N/A
**/
var GoogleChromeManagementV1MemoryInfo = /** @class */ (function (_super) {
    __extends(GoogleChromeManagementV1MemoryInfo, _super);
    function GoogleChromeManagementV1MemoryInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableRamBytes" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1MemoryInfo.prototype, "availableRamBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalMemoryEncryption" }),
        __metadata("design:type", GoogleChromeManagementV1TotalMemoryEncryptionInfo)
    ], GoogleChromeManagementV1MemoryInfo.prototype, "totalMemoryEncryption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalRamBytes" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1MemoryInfo.prototype, "totalRamBytes", void 0);
    return GoogleChromeManagementV1MemoryInfo;
}(SpeakeasyBase));
export { GoogleChromeManagementV1MemoryInfo };
