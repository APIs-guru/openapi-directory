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
import { InventorySourceDisplayCreativeConfig } from "./inventorysourcedisplaycreativeconfig";
import { InventorySourceVideoCreativeConfig } from "./inventorysourcevideocreativeconfig";
export var CreativeConfigCreativeTypeEnum;
(function (CreativeConfigCreativeTypeEnum) {
    CreativeConfigCreativeTypeEnum["CreativeTypeUnspecified"] = "CREATIVE_TYPE_UNSPECIFIED";
    CreativeConfigCreativeTypeEnum["CreativeTypeStandard"] = "CREATIVE_TYPE_STANDARD";
    CreativeConfigCreativeTypeEnum["CreativeTypeExpandable"] = "CREATIVE_TYPE_EXPANDABLE";
    CreativeConfigCreativeTypeEnum["CreativeTypeVideo"] = "CREATIVE_TYPE_VIDEO";
    CreativeConfigCreativeTypeEnum["CreativeTypeNative"] = "CREATIVE_TYPE_NATIVE";
    CreativeConfigCreativeTypeEnum["CreativeTypeTemplatedAppInstall"] = "CREATIVE_TYPE_TEMPLATED_APP_INSTALL";
    CreativeConfigCreativeTypeEnum["CreativeTypeNativeSiteSquare"] = "CREATIVE_TYPE_NATIVE_SITE_SQUARE";
    CreativeConfigCreativeTypeEnum["CreativeTypeTemplatedAppInstallInterstitial"] = "CREATIVE_TYPE_TEMPLATED_APP_INSTALL_INTERSTITIAL";
    CreativeConfigCreativeTypeEnum["CreativeTypeLightbox"] = "CREATIVE_TYPE_LIGHTBOX";
    CreativeConfigCreativeTypeEnum["CreativeTypeNativeAppInstall"] = "CREATIVE_TYPE_NATIVE_APP_INSTALL";
    CreativeConfigCreativeTypeEnum["CreativeTypeNativeAppInstallSquare"] = "CREATIVE_TYPE_NATIVE_APP_INSTALL_SQUARE";
    CreativeConfigCreativeTypeEnum["CreativeTypeAudio"] = "CREATIVE_TYPE_AUDIO";
    CreativeConfigCreativeTypeEnum["CreativeTypePublisherHosted"] = "CREATIVE_TYPE_PUBLISHER_HOSTED";
    CreativeConfigCreativeTypeEnum["CreativeTypeNativeVideo"] = "CREATIVE_TYPE_NATIVE_VIDEO";
    CreativeConfigCreativeTypeEnum["CreativeTypeTemplatedAppInstallVideo"] = "CREATIVE_TYPE_TEMPLATED_APP_INSTALL_VIDEO";
})(CreativeConfigCreativeTypeEnum || (CreativeConfigCreativeTypeEnum = {}));
// CreativeConfig
/**
 * Creative requirements configuration for the inventory source.
**/
var CreativeConfig = /** @class */ (function (_super) {
    __extends(CreativeConfig, _super);
    function CreativeConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeType" }),
        __metadata("design:type", String)
    ], CreativeConfig.prototype, "creativeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayCreativeConfig" }),
        __metadata("design:type", InventorySourceDisplayCreativeConfig)
    ], CreativeConfig.prototype, "displayCreativeConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoCreativeConfig" }),
        __metadata("design:type", InventorySourceVideoCreativeConfig)
    ], CreativeConfig.prototype, "videoCreativeConfig", void 0);
    return CreativeConfig;
}(SpeakeasyBase));
export { CreativeConfig };
