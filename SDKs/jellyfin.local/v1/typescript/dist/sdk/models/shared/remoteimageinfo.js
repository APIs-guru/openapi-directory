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
import { RatingTypeEnum } from "./ratingtypeenum";
import { ImageTypeEnum } from "./imagetypeenum";
// RemoteImageInfo
/**
 * Class RemoteImageInfo.
**/
var RemoteImageInfo = /** @class */ (function (_super) {
    __extends(RemoteImageInfo, _super);
    function RemoteImageInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CommunityRating" }),
        __metadata("design:type", Number)
    ], RemoteImageInfo.prototype, "communityRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Height" }),
        __metadata("design:type", Number)
    ], RemoteImageInfo.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Language" }),
        __metadata("design:type", String)
    ], RemoteImageInfo.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProviderName" }),
        __metadata("design:type", String)
    ], RemoteImageInfo.prototype, "providerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RatingType" }),
        __metadata("design:type", String)
    ], RemoteImageInfo.prototype, "ratingType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThumbnailUrl" }),
        __metadata("design:type", String)
    ], RemoteImageInfo.prototype, "thumbnailUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], RemoteImageInfo.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Url" }),
        __metadata("design:type", String)
    ], RemoteImageInfo.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VoteCount" }),
        __metadata("design:type", Number)
    ], RemoteImageInfo.prototype, "voteCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Width" }),
        __metadata("design:type", Number)
    ], RemoteImageInfo.prototype, "width", void 0);
    return RemoteImageInfo;
}(SpeakeasyBase));
export { RemoteImageInfo };
