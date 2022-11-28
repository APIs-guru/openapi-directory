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
export var AppAssignedTargetingOptionDetailsAppPlatformEnum;
(function (AppAssignedTargetingOptionDetailsAppPlatformEnum) {
    AppAssignedTargetingOptionDetailsAppPlatformEnum["AppPlatformUnspecified"] = "APP_PLATFORM_UNSPECIFIED";
    AppAssignedTargetingOptionDetailsAppPlatformEnum["AppPlatformIos"] = "APP_PLATFORM_IOS";
    AppAssignedTargetingOptionDetailsAppPlatformEnum["AppPlatformAndroid"] = "APP_PLATFORM_ANDROID";
    AppAssignedTargetingOptionDetailsAppPlatformEnum["AppPlatformRoku"] = "APP_PLATFORM_ROKU";
    AppAssignedTargetingOptionDetailsAppPlatformEnum["AppPlatformAmazonFiretv"] = "APP_PLATFORM_AMAZON_FIRETV";
    AppAssignedTargetingOptionDetailsAppPlatformEnum["AppPlatformPlaystation"] = "APP_PLATFORM_PLAYSTATION";
    AppAssignedTargetingOptionDetailsAppPlatformEnum["AppPlatformAppleTv"] = "APP_PLATFORM_APPLE_TV";
    AppAssignedTargetingOptionDetailsAppPlatformEnum["AppPlatformXbox"] = "APP_PLATFORM_XBOX";
    AppAssignedTargetingOptionDetailsAppPlatformEnum["AppPlatformSamsungTv"] = "APP_PLATFORM_SAMSUNG_TV";
    AppAssignedTargetingOptionDetailsAppPlatformEnum["AppPlatformAndroidTv"] = "APP_PLATFORM_ANDROID_TV";
    AppAssignedTargetingOptionDetailsAppPlatformEnum["AppPlatformGenericCtv"] = "APP_PLATFORM_GENERIC_CTV";
})(AppAssignedTargetingOptionDetailsAppPlatformEnum || (AppAssignedTargetingOptionDetailsAppPlatformEnum = {}));
// AppAssignedTargetingOptionDetails
/**
 * Details for assigned app targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_APP`.
**/
var AppAssignedTargetingOptionDetails = /** @class */ (function (_super) {
    __extends(AppAssignedTargetingOptionDetails, _super);
    function AppAssignedTargetingOptionDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appId" }),
        __metadata("design:type", String)
    ], AppAssignedTargetingOptionDetails.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appPlatform" }),
        __metadata("design:type", String)
    ], AppAssignedTargetingOptionDetails.prototype, "appPlatform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], AppAssignedTargetingOptionDetails.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=negative" }),
        __metadata("design:type", Boolean)
    ], AppAssignedTargetingOptionDetails.prototype, "negative", void 0);
    return AppAssignedTargetingOptionDetails;
}(SpeakeasyBase));
export { AppAssignedTargetingOptionDetails };
// AppAssignedTargetingOptionDetailsInput
/**
 * Details for assigned app targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_APP`.
**/
var AppAssignedTargetingOptionDetailsInput = /** @class */ (function (_super) {
    __extends(AppAssignedTargetingOptionDetailsInput, _super);
    function AppAssignedTargetingOptionDetailsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appId" }),
        __metadata("design:type", String)
    ], AppAssignedTargetingOptionDetailsInput.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appPlatform" }),
        __metadata("design:type", String)
    ], AppAssignedTargetingOptionDetailsInput.prototype, "appPlatform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=negative" }),
        __metadata("design:type", Boolean)
    ], AppAssignedTargetingOptionDetailsInput.prototype, "negative", void 0);
    return AppAssignedTargetingOptionDetailsInput;
}(SpeakeasyBase));
export { AppAssignedTargetingOptionDetailsInput };
