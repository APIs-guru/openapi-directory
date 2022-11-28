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
export var GoogleChromeManagementV1BrowserVersionChannelEnum;
(function (GoogleChromeManagementV1BrowserVersionChannelEnum) {
    GoogleChromeManagementV1BrowserVersionChannelEnum["ReleaseChannelUnspecified"] = "RELEASE_CHANNEL_UNSPECIFIED";
    GoogleChromeManagementV1BrowserVersionChannelEnum["Canary"] = "CANARY";
    GoogleChromeManagementV1BrowserVersionChannelEnum["Dev"] = "DEV";
    GoogleChromeManagementV1BrowserVersionChannelEnum["Beta"] = "BETA";
    GoogleChromeManagementV1BrowserVersionChannelEnum["Stable"] = "STABLE";
})(GoogleChromeManagementV1BrowserVersionChannelEnum || (GoogleChromeManagementV1BrowserVersionChannelEnum = {}));
export var GoogleChromeManagementV1BrowserVersionSystemEnum;
(function (GoogleChromeManagementV1BrowserVersionSystemEnum) {
    GoogleChromeManagementV1BrowserVersionSystemEnum["DeviceSystemUnspecified"] = "DEVICE_SYSTEM_UNSPECIFIED";
    GoogleChromeManagementV1BrowserVersionSystemEnum["SystemOther"] = "SYSTEM_OTHER";
    GoogleChromeManagementV1BrowserVersionSystemEnum["SystemAndroid"] = "SYSTEM_ANDROID";
    GoogleChromeManagementV1BrowserVersionSystemEnum["SystemIos"] = "SYSTEM_IOS";
    GoogleChromeManagementV1BrowserVersionSystemEnum["SystemCros"] = "SYSTEM_CROS";
    GoogleChromeManagementV1BrowserVersionSystemEnum["SystemWindows"] = "SYSTEM_WINDOWS";
    GoogleChromeManagementV1BrowserVersionSystemEnum["SystemMac"] = "SYSTEM_MAC";
    GoogleChromeManagementV1BrowserVersionSystemEnum["SystemLinux"] = "SYSTEM_LINUX";
})(GoogleChromeManagementV1BrowserVersionSystemEnum || (GoogleChromeManagementV1BrowserVersionSystemEnum = {}));
// GoogleChromeManagementV1BrowserVersion
/**
 * Describes a browser version and its install count.
**/
var GoogleChromeManagementV1BrowserVersion = /** @class */ (function (_super) {
    __extends(GoogleChromeManagementV1BrowserVersion, _super);
    function GoogleChromeManagementV1BrowserVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channel" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1BrowserVersion.prototype, "channel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1BrowserVersion.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceOsVersion" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1BrowserVersion.prototype, "deviceOsVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=system" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1BrowserVersion.prototype, "system", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1BrowserVersion.prototype, "version", void 0);
    return GoogleChromeManagementV1BrowserVersion;
}(SpeakeasyBase));
export { GoogleChromeManagementV1BrowserVersion };
