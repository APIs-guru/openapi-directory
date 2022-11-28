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
// ItemCounts
/**
 * Class LibrarySummary.
**/
var ItemCounts = /** @class */ (function (_super) {
    __extends(ItemCounts, _super);
    function ItemCounts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AlbumCount" }),
        __metadata("design:type", Number)
    ], ItemCounts.prototype, "albumCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ArtistCount" }),
        __metadata("design:type", Number)
    ], ItemCounts.prototype, "artistCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BookCount" }),
        __metadata("design:type", Number)
    ], ItemCounts.prototype, "bookCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BoxSetCount" }),
        __metadata("design:type", Number)
    ], ItemCounts.prototype, "boxSetCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EpisodeCount" }),
        __metadata("design:type", Number)
    ], ItemCounts.prototype, "episodeCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ItemCount" }),
        __metadata("design:type", Number)
    ], ItemCounts.prototype, "itemCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MovieCount" }),
        __metadata("design:type", Number)
    ], ItemCounts.prototype, "movieCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MusicVideoCount" }),
        __metadata("design:type", Number)
    ], ItemCounts.prototype, "musicVideoCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProgramCount" }),
        __metadata("design:type", Number)
    ], ItemCounts.prototype, "programCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SeriesCount" }),
        __metadata("design:type", Number)
    ], ItemCounts.prototype, "seriesCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SongCount" }),
        __metadata("design:type", Number)
    ], ItemCounts.prototype, "songCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrailerCount" }),
        __metadata("design:type", Number)
    ], ItemCounts.prototype, "trailerCount", void 0);
    return ItemCounts;
}(SpeakeasyBase));
export { ItemCounts };
