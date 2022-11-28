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
// SearchHint
/**
 * Class SearchHintResult.
**/
var SearchHint = /** @class */ (function (_super) {
    __extends(SearchHint, _super);
    function SearchHint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Album" }),
        __metadata("design:type", String)
    ], SearchHint.prototype, "album", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AlbumArtist" }),
        __metadata("design:type", String)
    ], SearchHint.prototype, "albumArtist", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AlbumId" }),
        __metadata("design:type", String)
    ], SearchHint.prototype, "albumId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Artists" }),
        __metadata("design:type", Array)
    ], SearchHint.prototype, "artists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BackdropImageItemId" }),
        __metadata("design:type", String)
    ], SearchHint.prototype, "backdropImageItemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BackdropImageTag" }),
        __metadata("design:type", String)
    ], SearchHint.prototype, "backdropImageTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChannelId" }),
        __metadata("design:type", String)
    ], SearchHint.prototype, "channelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChannelName" }),
        __metadata("design:type", String)
    ], SearchHint.prototype, "channelName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndDate" }),
        __metadata("design:type", Date)
    ], SearchHint.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EpisodeCount" }),
        __metadata("design:type", Number)
    ], SearchHint.prototype, "episodeCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], SearchHint.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IndexNumber" }),
        __metadata("design:type", Number)
    ], SearchHint.prototype, "indexNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsFolder" }),
        __metadata("design:type", Boolean)
    ], SearchHint.prototype, "isFolder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ItemId" }),
        __metadata("design:type", String)
    ], SearchHint.prototype, "itemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MatchedTerm" }),
        __metadata("design:type", String)
    ], SearchHint.prototype, "matchedTerm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MediaType" }),
        __metadata("design:type", String)
    ], SearchHint.prototype, "mediaType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], SearchHint.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentIndexNumber" }),
        __metadata("design:type", Number)
    ], SearchHint.prototype, "parentIndexNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PrimaryImageAspectRatio" }),
        __metadata("design:type", Number)
    ], SearchHint.prototype, "primaryImageAspectRatio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PrimaryImageTag" }),
        __metadata("design:type", String)
    ], SearchHint.prototype, "primaryImageTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductionYear" }),
        __metadata("design:type", Number)
    ], SearchHint.prototype, "productionYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RunTimeTicks" }),
        __metadata("design:type", Number)
    ], SearchHint.prototype, "runTimeTicks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Series" }),
        __metadata("design:type", String)
    ], SearchHint.prototype, "series", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SongCount" }),
        __metadata("design:type", Number)
    ], SearchHint.prototype, "songCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartDate" }),
        __metadata("design:type", Date)
    ], SearchHint.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], SearchHint.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThumbImageItemId" }),
        __metadata("design:type", String)
    ], SearchHint.prototype, "thumbImageItemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThumbImageTag" }),
        __metadata("design:type", String)
    ], SearchHint.prototype, "thumbImageTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], SearchHint.prototype, "type", void 0);
    return SearchHint;
}(SpeakeasyBase));
export { SearchHint };
