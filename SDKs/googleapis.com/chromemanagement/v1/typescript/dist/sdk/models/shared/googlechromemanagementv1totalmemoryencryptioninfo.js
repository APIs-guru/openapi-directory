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
export var GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionAlgorithmEnum;
(function (GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionAlgorithmEnum) {
    GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionAlgorithmEnum["MemoryEncryptionAlgorithmUnspecified"] = "MEMORY_ENCRYPTION_ALGORITHM_UNSPECIFIED";
    GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionAlgorithmEnum["MemoryEncryptionAlgorithmUnknown"] = "MEMORY_ENCRYPTION_ALGORITHM_UNKNOWN";
    GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionAlgorithmEnum["MemoryEncryptionAlgorithmAesXts128"] = "MEMORY_ENCRYPTION_ALGORITHM_AES_XTS_128";
    GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionAlgorithmEnum["MemoryEncryptionAlgorithmAesXts256"] = "MEMORY_ENCRYPTION_ALGORITHM_AES_XTS_256";
})(GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionAlgorithmEnum || (GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionAlgorithmEnum = {}));
export var GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionStateEnum;
(function (GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionStateEnum) {
    GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionStateEnum["MemoryEncryptionStateUnspecified"] = "MEMORY_ENCRYPTION_STATE_UNSPECIFIED";
    GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionStateEnum["MemoryEncryptionStateUnknown"] = "MEMORY_ENCRYPTION_STATE_UNKNOWN";
    GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionStateEnum["MemoryEncryptionStateDisabled"] = "MEMORY_ENCRYPTION_STATE_DISABLED";
    GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionStateEnum["MemoryEncryptionStateTme"] = "MEMORY_ENCRYPTION_STATE_TME";
    GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionStateEnum["MemoryEncryptionStateMktme"] = "MEMORY_ENCRYPTION_STATE_MKTME";
})(GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionStateEnum || (GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionStateEnum = {}));
// GoogleChromeManagementV1TotalMemoryEncryptionInfo
/**
 * Memory encryption information of a device. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceMemoryInfo](https://chromeenterprise.google/policies/#ReportDeviceMemoryInfo) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A
**/
var GoogleChromeManagementV1TotalMemoryEncryptionInfo = /** @class */ (function (_super) {
    __extends(GoogleChromeManagementV1TotalMemoryEncryptionInfo, _super);
    function GoogleChromeManagementV1TotalMemoryEncryptionInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionAlgorithm" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1TotalMemoryEncryptionInfo.prototype, "encryptionAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionState" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1TotalMemoryEncryptionInfo.prototype, "encryptionState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keyLength" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1TotalMemoryEncryptionInfo.prototype, "keyLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxKeys" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1TotalMemoryEncryptionInfo.prototype, "maxKeys", void 0);
    return GoogleChromeManagementV1TotalMemoryEncryptionInfo;
}(SpeakeasyBase));
export { GoogleChromeManagementV1TotalMemoryEncryptionInfo };
