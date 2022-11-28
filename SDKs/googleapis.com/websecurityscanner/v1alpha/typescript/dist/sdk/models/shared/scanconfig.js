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
import { Authentication } from "./authentication";
import { ScanRun } from "./scanrun";
import { Schedule } from "./schedule";
export var ScanConfigTargetPlatformsEnum;
(function (ScanConfigTargetPlatformsEnum) {
    ScanConfigTargetPlatformsEnum["TargetPlatformUnspecified"] = "TARGET_PLATFORM_UNSPECIFIED";
    ScanConfigTargetPlatformsEnum["AppEngine"] = "APP_ENGINE";
    ScanConfigTargetPlatformsEnum["Compute"] = "COMPUTE";
    ScanConfigTargetPlatformsEnum["CloudRun"] = "CLOUD_RUN";
    ScanConfigTargetPlatformsEnum["CloudFunctions"] = "CLOUD_FUNCTIONS";
})(ScanConfigTargetPlatformsEnum || (ScanConfigTargetPlatformsEnum = {}));
export var ScanConfigUserAgentEnum;
(function (ScanConfigUserAgentEnum) {
    ScanConfigUserAgentEnum["UserAgentUnspecified"] = "USER_AGENT_UNSPECIFIED";
    ScanConfigUserAgentEnum["ChromeLinux"] = "CHROME_LINUX";
    ScanConfigUserAgentEnum["ChromeAndroid"] = "CHROME_ANDROID";
    ScanConfigUserAgentEnum["SafariIphone"] = "SAFARI_IPHONE";
})(ScanConfigUserAgentEnum || (ScanConfigUserAgentEnum = {}));
// ScanConfig
/**
 * A ScanConfig resource contains the configurations to launch a scan. next id: 12
**/
var ScanConfig = /** @class */ (function (_super) {
    __extends(ScanConfig, _super);
    function ScanConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authentication" }),
        __metadata("design:type", Authentication)
    ], ScanConfig.prototype, "authentication", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blacklistPatterns" }),
        __metadata("design:type", Array)
    ], ScanConfig.prototype, "blacklistPatterns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ScanConfig.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latestRun" }),
        __metadata("design:type", ScanRun)
    ], ScanConfig.prototype, "latestRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxQps" }),
        __metadata("design:type", Number)
    ], ScanConfig.prototype, "maxQps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ScanConfig.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schedule" }),
        __metadata("design:type", Schedule)
    ], ScanConfig.prototype, "schedule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startingUrls" }),
        __metadata("design:type", Array)
    ], ScanConfig.prototype, "startingUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetPlatforms" }),
        __metadata("design:type", Array)
    ], ScanConfig.prototype, "targetPlatforms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userAgent" }),
        __metadata("design:type", String)
    ], ScanConfig.prototype, "userAgent", void 0);
    return ScanConfig;
}(SpeakeasyBase));
export { ScanConfig };
