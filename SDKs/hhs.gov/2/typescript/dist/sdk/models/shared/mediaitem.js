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
import { Campaign } from "./campaign";
import { ExtendedAttribute } from "./extendedattribute";
import { Language } from "./language";
import { Source } from "./source";
var MediaItem = /** @class */ (function (_super) {
    __extends(MediaItem, _super);
    function MediaItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=campaigns", elemType: Campaign }),
        __metadata("design:type", Array)
    ], MediaItem.prototype, "campaigns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdBy" }),
        __metadata("design:type", String)
    ], MediaItem.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customAttributionUrl" }),
        __metadata("design:type", String)
    ], MediaItem.prototype, "customAttributionUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customPreviewUrl" }),
        __metadata("design:type", String)
    ], MediaItem.prototype, "customPreviewUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customThumbnailUrl" }),
        __metadata("design:type", String)
    ], MediaItem.prototype, "customThumbnailUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateContentAuthored" }),
        __metadata("design:type", Date)
    ], MediaItem.prototype, "dateContentAuthored", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateContentPublished" }),
        __metadata("design:type", Date)
    ], MediaItem.prototype, "dateContentPublished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateContentReviewed" }),
        __metadata("design:type", Date)
    ], MediaItem.prototype, "dateContentReviewed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateContentUpdated" }),
        __metadata("design:type", Date)
    ], MediaItem.prototype, "dateContentUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateSyndicationCaptured" }),
        __metadata("design:type", Date)
    ], MediaItem.prototype, "dateSyndicationCaptured", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateSyndicationUpdated" }),
        __metadata("design:type", Date)
    ], MediaItem.prototype, "dateSyndicationUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateSyndicationVisible" }),
        __metadata("design:type", Date)
    ], MediaItem.prototype, "dateSyndicationVisible", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], MediaItem.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extendedAttributes", elemType: ExtendedAttribute }),
        __metadata("design:type", Array)
    ], MediaItem.prototype, "extendedAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalGuid" }),
        __metadata("design:type", String)
    ], MediaItem.prototype, "externalGuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=foreignSyndicationAPIUrl" }),
        __metadata("design:type", String)
    ], MediaItem.prototype, "foreignSyndicationApiUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hash" }),
        __metadata("design:type", String)
    ], MediaItem.prototype, "hash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], MediaItem.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", Language)
    ], MediaItem.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mediaType" }),
        __metadata("design:type", String)
    ], MediaItem.prototype, "mediaType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], MediaItem.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", Source)
    ], MediaItem.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceUrl" }),
        __metadata("design:type", String)
    ], MediaItem.prototype, "sourceUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetUrl" }),
        __metadata("design:type", String)
    ], MediaItem.prototype, "targetUrl", void 0);
    return MediaItem;
}(SpeakeasyBase));
export { MediaItem };
