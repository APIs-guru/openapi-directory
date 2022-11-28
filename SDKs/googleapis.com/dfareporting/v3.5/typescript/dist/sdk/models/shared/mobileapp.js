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
export var MobileAppDirectoryEnum;
(function (MobileAppDirectoryEnum) {
    MobileAppDirectoryEnum["Unknown"] = "UNKNOWN";
    MobileAppDirectoryEnum["AppleAppStore"] = "APPLE_APP_STORE";
    MobileAppDirectoryEnum["GooglePlayStore"] = "GOOGLE_PLAY_STORE";
    MobileAppDirectoryEnum["RokuAppStore"] = "ROKU_APP_STORE";
    MobileAppDirectoryEnum["AmazonFiretvAppStore"] = "AMAZON_FIRETV_APP_STORE";
    MobileAppDirectoryEnum["PlaystationAppStore"] = "PLAYSTATION_APP_STORE";
    MobileAppDirectoryEnum["AppleTvAppStore"] = "APPLE_TV_APP_STORE";
    MobileAppDirectoryEnum["XboxAppStore"] = "XBOX_APP_STORE";
    MobileAppDirectoryEnum["SamsungTvAppStore"] = "SAMSUNG_TV_APP_STORE";
    MobileAppDirectoryEnum["AndroidTvAppStore"] = "ANDROID_TV_APP_STORE";
    MobileAppDirectoryEnum["GenericCtvAppStore"] = "GENERIC_CTV_APP_STORE";
})(MobileAppDirectoryEnum || (MobileAppDirectoryEnum = {}));
// MobileApp
/**
 * Contains information about a mobile app. Used as a landing page deep link.
**/
var MobileApp = /** @class */ (function (_super) {
    __extends(MobileApp, _super);
    function MobileApp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=directory" }),
        __metadata("design:type", String)
    ], MobileApp.prototype, "directory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], MobileApp.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], MobileApp.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publisherName" }),
        __metadata("design:type", String)
    ], MobileApp.prototype, "publisherName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], MobileApp.prototype, "title", void 0);
    return MobileApp;
}(SpeakeasyBase));
export { MobileApp };
