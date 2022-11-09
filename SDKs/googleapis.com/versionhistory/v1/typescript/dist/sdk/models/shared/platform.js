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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var PlatformPlatformTypeEnum;
(function (PlatformPlatformTypeEnum) {
    PlatformPlatformTypeEnum["PlatformTypeUnspecified"] = "PLATFORM_TYPE_UNSPECIFIED";
    PlatformPlatformTypeEnum["Win"] = "WIN";
    PlatformPlatformTypeEnum["Win64"] = "WIN64";
    PlatformPlatformTypeEnum["Mac"] = "MAC";
    PlatformPlatformTypeEnum["Linux"] = "LINUX";
    PlatformPlatformTypeEnum["Android"] = "ANDROID";
    PlatformPlatformTypeEnum["Webview"] = "WEBVIEW";
    PlatformPlatformTypeEnum["Ios"] = "IOS";
    PlatformPlatformTypeEnum["All"] = "ALL";
    PlatformPlatformTypeEnum["MacArm64"] = "MAC_ARM64";
    PlatformPlatformTypeEnum["Lacros"] = "LACROS";
    PlatformPlatformTypeEnum["LacrosArm32"] = "LACROS_ARM32";
    PlatformPlatformTypeEnum["Chromeos"] = "CHROMEOS";
    PlatformPlatformTypeEnum["LacrosArm64"] = "LACROS_ARM64";
})(PlatformPlatformTypeEnum || (PlatformPlatformTypeEnum = {}));
// Platform
/**
 * Each Platform is owned by a Product and owns a collection of channels. Available platforms are listed in Platform enum below. Not all Channels are available for every Platform (e.g. CANARY does not exist for LINUX).
**/
var Platform = /** @class */ (function (_super) {
    __extends(Platform, _super);
    function Platform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Platform.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=platformType" }),
        __metadata("design:type", String)
    ], Platform.prototype, "platformType", void 0);
    return Platform;
}(SpeakeasyBase));
export { Platform };
