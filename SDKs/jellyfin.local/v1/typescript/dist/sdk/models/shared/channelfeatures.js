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
var ChannelFeatures = /** @class */ (function (_super) {
    __extends(ChannelFeatures, _super);
    function ChannelFeatures() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoRefreshLevels" }),
        __metadata("design:type", Number)
    ], ChannelFeatures.prototype, "autoRefreshLevels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CanFilter" }),
        __metadata("design:type", Boolean)
    ], ChannelFeatures.prototype, "canFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CanSearch" }),
        __metadata("design:type", Boolean)
    ], ChannelFeatures.prototype, "canSearch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContentTypes" }),
        __metadata("design:type", Array)
    ], ChannelFeatures.prototype, "contentTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultSortFields" }),
        __metadata("design:type", Array)
    ], ChannelFeatures.prototype, "defaultSortFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], ChannelFeatures.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxPageSize" }),
        __metadata("design:type", Number)
    ], ChannelFeatures.prototype, "maxPageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MediaTypes" }),
        __metadata("design:type", Array)
    ], ChannelFeatures.prototype, "mediaTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ChannelFeatures.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupportsContentDownloading" }),
        __metadata("design:type", Boolean)
    ], ChannelFeatures.prototype, "supportsContentDownloading", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupportsLatestMedia" }),
        __metadata("design:type", Boolean)
    ], ChannelFeatures.prototype, "supportsLatestMedia", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupportsSortOrderToggle" }),
        __metadata("design:type", Boolean)
    ], ChannelFeatures.prototype, "supportsSortOrderToggle", void 0);
    return ChannelFeatures;
}(SpeakeasyBase));
export { ChannelFeatures };
