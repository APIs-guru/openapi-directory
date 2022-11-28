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
export var GoogleChromeManagementV1ThunderboltInfoSecurityLevelEnum;
(function (GoogleChromeManagementV1ThunderboltInfoSecurityLevelEnum) {
    GoogleChromeManagementV1ThunderboltInfoSecurityLevelEnum["ThunderboltSecurityLevelUnspecified"] = "THUNDERBOLT_SECURITY_LEVEL_UNSPECIFIED";
    GoogleChromeManagementV1ThunderboltInfoSecurityLevelEnum["ThunderboltSecurityNoneLevel"] = "THUNDERBOLT_SECURITY_NONE_LEVEL";
    GoogleChromeManagementV1ThunderboltInfoSecurityLevelEnum["ThunderboltSecurityUserLevel"] = "THUNDERBOLT_SECURITY_USER_LEVEL";
    GoogleChromeManagementV1ThunderboltInfoSecurityLevelEnum["ThunderboltSecuritySecureLevel"] = "THUNDERBOLT_SECURITY_SECURE_LEVEL";
    GoogleChromeManagementV1ThunderboltInfoSecurityLevelEnum["ThunderboltSecurityDpOnlyLevel"] = "THUNDERBOLT_SECURITY_DP_ONLY_LEVEL";
    GoogleChromeManagementV1ThunderboltInfoSecurityLevelEnum["ThunderboltSecurityUsbOnlyLevel"] = "THUNDERBOLT_SECURITY_USB_ONLY_LEVEL";
    GoogleChromeManagementV1ThunderboltInfoSecurityLevelEnum["ThunderboltSecurityNoPcieLevel"] = "THUNDERBOLT_SECURITY_NO_PCIE_LEVEL";
})(GoogleChromeManagementV1ThunderboltInfoSecurityLevelEnum || (GoogleChromeManagementV1ThunderboltInfoSecurityLevelEnum = {}));
// GoogleChromeManagementV1ThunderboltInfo
/**
 * Thunderbolt bus info. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceSecurityStatus](https://chromeenterprise.google/policies/#ReportDeviceSecurityStatus) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: No * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A
**/
var GoogleChromeManagementV1ThunderboltInfo = /** @class */ (function (_super) {
    __extends(GoogleChromeManagementV1ThunderboltInfo, _super);
    function GoogleChromeManagementV1ThunderboltInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=securityLevel" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1ThunderboltInfo.prototype, "securityLevel", void 0);
    return GoogleChromeManagementV1ThunderboltInfo;
}(SpeakeasyBase));
export { GoogleChromeManagementV1ThunderboltInfo };
