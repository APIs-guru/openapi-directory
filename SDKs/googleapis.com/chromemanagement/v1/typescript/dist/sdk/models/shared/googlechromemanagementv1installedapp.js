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
export var GoogleChromeManagementV1InstalledAppAppInstallTypeEnum;
(function (GoogleChromeManagementV1InstalledAppAppInstallTypeEnum) {
    GoogleChromeManagementV1InstalledAppAppInstallTypeEnum["AppInstallTypeUnspecified"] = "APP_INSTALL_TYPE_UNSPECIFIED";
    GoogleChromeManagementV1InstalledAppAppInstallTypeEnum["Multiple"] = "MULTIPLE";
    GoogleChromeManagementV1InstalledAppAppInstallTypeEnum["Normal"] = "NORMAL";
    GoogleChromeManagementV1InstalledAppAppInstallTypeEnum["Admin"] = "ADMIN";
    GoogleChromeManagementV1InstalledAppAppInstallTypeEnum["Development"] = "DEVELOPMENT";
    GoogleChromeManagementV1InstalledAppAppInstallTypeEnum["Sideload"] = "SIDELOAD";
    GoogleChromeManagementV1InstalledAppAppInstallTypeEnum["Other"] = "OTHER";
})(GoogleChromeManagementV1InstalledAppAppInstallTypeEnum || (GoogleChromeManagementV1InstalledAppAppInstallTypeEnum = {}));
export var GoogleChromeManagementV1InstalledAppAppSourceEnum;
(function (GoogleChromeManagementV1InstalledAppAppSourceEnum) {
    GoogleChromeManagementV1InstalledAppAppSourceEnum["AppSourceUnspecified"] = "APP_SOURCE_UNSPECIFIED";
    GoogleChromeManagementV1InstalledAppAppSourceEnum["ChromeWebstore"] = "CHROME_WEBSTORE";
    GoogleChromeManagementV1InstalledAppAppSourceEnum["PlayStore"] = "PLAY_STORE";
})(GoogleChromeManagementV1InstalledAppAppSourceEnum || (GoogleChromeManagementV1InstalledAppAppSourceEnum = {}));
export var GoogleChromeManagementV1InstalledAppAppTypeEnum;
(function (GoogleChromeManagementV1InstalledAppAppTypeEnum) {
    GoogleChromeManagementV1InstalledAppAppTypeEnum["AppTypeUnspecified"] = "APP_TYPE_UNSPECIFIED";
    GoogleChromeManagementV1InstalledAppAppTypeEnum["Extension"] = "EXTENSION";
    GoogleChromeManagementV1InstalledAppAppTypeEnum["App"] = "APP";
    GoogleChromeManagementV1InstalledAppAppTypeEnum["Theme"] = "THEME";
    GoogleChromeManagementV1InstalledAppAppTypeEnum["HostedApp"] = "HOSTED_APP";
    GoogleChromeManagementV1InstalledAppAppTypeEnum["AndroidApp"] = "ANDROID_APP";
})(GoogleChromeManagementV1InstalledAppAppTypeEnum || (GoogleChromeManagementV1InstalledAppAppTypeEnum = {}));
// GoogleChromeManagementV1InstalledApp
/**
 * Describes an installed app.
**/
var GoogleChromeManagementV1InstalledApp = /** @class */ (function (_super) {
    __extends(GoogleChromeManagementV1InstalledApp, _super);
    function GoogleChromeManagementV1InstalledApp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appId" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1InstalledApp.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appInstallType" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1InstalledApp.prototype, "appInstallType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appSource" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1InstalledApp.prototype, "appSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appType" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1InstalledApp.prototype, "appType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=browserDeviceCount" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1InstalledApp.prototype, "browserDeviceCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1InstalledApp.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabled" }),
        __metadata("design:type", Boolean)
    ], GoogleChromeManagementV1InstalledApp.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1InstalledApp.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=homepageUri" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1InstalledApp.prototype, "homepageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=osUserCount" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1InstalledApp.prototype, "osUserCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", Array)
    ], GoogleChromeManagementV1InstalledApp.prototype, "permissions", void 0);
    return GoogleChromeManagementV1InstalledApp;
}(SpeakeasyBase));
export { GoogleChromeManagementV1InstalledApp };
