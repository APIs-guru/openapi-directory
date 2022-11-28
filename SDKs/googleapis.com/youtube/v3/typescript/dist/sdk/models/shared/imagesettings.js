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
import { LocalizedProperty } from "./localizedproperty";
// ImageSettings
/**
 * Branding properties for images associated with the channel.
**/
var ImageSettings = /** @class */ (function (_super) {
    __extends(ImageSettings, _super);
    function ImageSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backgroundImageUrl" }),
        __metadata("design:type", LocalizedProperty)
    ], ImageSettings.prototype, "backgroundImageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bannerExternalUrl" }),
        __metadata("design:type", String)
    ], ImageSettings.prototype, "bannerExternalUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bannerImageUrl" }),
        __metadata("design:type", String)
    ], ImageSettings.prototype, "bannerImageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bannerMobileExtraHdImageUrl" }),
        __metadata("design:type", String)
    ], ImageSettings.prototype, "bannerMobileExtraHdImageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bannerMobileHdImageUrl" }),
        __metadata("design:type", String)
    ], ImageSettings.prototype, "bannerMobileHdImageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bannerMobileImageUrl" }),
        __metadata("design:type", String)
    ], ImageSettings.prototype, "bannerMobileImageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bannerMobileLowImageUrl" }),
        __metadata("design:type", String)
    ], ImageSettings.prototype, "bannerMobileLowImageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bannerMobileMediumHdImageUrl" }),
        __metadata("design:type", String)
    ], ImageSettings.prototype, "bannerMobileMediumHdImageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bannerTabletExtraHdImageUrl" }),
        __metadata("design:type", String)
    ], ImageSettings.prototype, "bannerTabletExtraHdImageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bannerTabletHdImageUrl" }),
        __metadata("design:type", String)
    ], ImageSettings.prototype, "bannerTabletHdImageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bannerTabletImageUrl" }),
        __metadata("design:type", String)
    ], ImageSettings.prototype, "bannerTabletImageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bannerTabletLowImageUrl" }),
        __metadata("design:type", String)
    ], ImageSettings.prototype, "bannerTabletLowImageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bannerTvHighImageUrl" }),
        __metadata("design:type", String)
    ], ImageSettings.prototype, "bannerTvHighImageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bannerTvImageUrl" }),
        __metadata("design:type", String)
    ], ImageSettings.prototype, "bannerTvImageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bannerTvLowImageUrl" }),
        __metadata("design:type", String)
    ], ImageSettings.prototype, "bannerTvLowImageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bannerTvMediumImageUrl" }),
        __metadata("design:type", String)
    ], ImageSettings.prototype, "bannerTvMediumImageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=largeBrandedBannerImageImapScript" }),
        __metadata("design:type", LocalizedProperty)
    ], ImageSettings.prototype, "largeBrandedBannerImageImapScript", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=largeBrandedBannerImageUrl" }),
        __metadata("design:type", LocalizedProperty)
    ], ImageSettings.prototype, "largeBrandedBannerImageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=smallBrandedBannerImageImapScript" }),
        __metadata("design:type", LocalizedProperty)
    ], ImageSettings.prototype, "smallBrandedBannerImageImapScript", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=smallBrandedBannerImageUrl" }),
        __metadata("design:type", LocalizedProperty)
    ], ImageSettings.prototype, "smallBrandedBannerImageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trackingImageUrl" }),
        __metadata("design:type", String)
    ], ImageSettings.prototype, "trackingImageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchIconImageUrl" }),
        __metadata("design:type", String)
    ], ImageSettings.prototype, "watchIconImageUrl", void 0);
    return ImageSettings;
}(SpeakeasyBase));
export { ImageSettings };
