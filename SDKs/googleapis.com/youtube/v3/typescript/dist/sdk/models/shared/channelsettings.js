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
// ChannelSettings
/**
 * Branding properties for the channel view.
**/
var ChannelSettings = /** @class */ (function (_super) {
    __extends(ChannelSettings, _super);
    function ChannelSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], ChannelSettings.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultLanguage" }),
        __metadata("design:type", String)
    ], ChannelSettings.prototype, "defaultLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultTab" }),
        __metadata("design:type", String)
    ], ChannelSettings.prototype, "defaultTab", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ChannelSettings.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=featuredChannelsTitle" }),
        __metadata("design:type", String)
    ], ChannelSettings.prototype, "featuredChannelsTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=featuredChannelsUrls" }),
        __metadata("design:type", Array)
    ], ChannelSettings.prototype, "featuredChannelsUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keywords" }),
        __metadata("design:type", String)
    ], ChannelSettings.prototype, "keywords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=moderateComments" }),
        __metadata("design:type", Boolean)
    ], ChannelSettings.prototype, "moderateComments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=profileColor" }),
        __metadata("design:type", String)
    ], ChannelSettings.prototype, "profileColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showBrowseView" }),
        __metadata("design:type", Boolean)
    ], ChannelSettings.prototype, "showBrowseView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showRelatedChannels" }),
        __metadata("design:type", Boolean)
    ], ChannelSettings.prototype, "showRelatedChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ChannelSettings.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trackingAnalyticsAccountId" }),
        __metadata("design:type", String)
    ], ChannelSettings.prototype, "trackingAnalyticsAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unsubscribedTrailer" }),
        __metadata("design:type", String)
    ], ChannelSettings.prototype, "unsubscribedTrailer", void 0);
    return ChannelSettings;
}(SpeakeasyBase));
export { ChannelSettings };
