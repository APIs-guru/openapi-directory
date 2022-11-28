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
import { PodcastExtraField } from "./podcastextrafield";
import { PodcastLookingForField } from "./podcastlookingforfield";
import { PodcastTypeFieldEnum } from "./podcasttypefieldenum";
var PodcastSimple = /** @class */ (function (_super) {
    __extends(PodcastSimple, _super);
    function PodcastSimple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], PodcastSimple.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PodcastSimple.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=earliest_pub_date_ms" }),
        __metadata("design:type", Number)
    ], PodcastSimple.prototype, "earliestPubDateMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], PodcastSimple.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=explicit_content" }),
        __metadata("design:type", Boolean)
    ], PodcastSimple.prototype, "explicitContent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extra" }),
        __metadata("design:type", PodcastExtraField)
    ], PodcastSimple.prototype, "extra", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=genre_ids" }),
        __metadata("design:type", Array)
    ], PodcastSimple.prototype, "genreIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PodcastSimple.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", String)
    ], PodcastSimple.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_claimed" }),
        __metadata("design:type", Boolean)
    ], PodcastSimple.prototype, "isClaimed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itunes_id" }),
        __metadata("design:type", Number)
    ], PodcastSimple.prototype, "itunesId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], PodcastSimple.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latest_pub_date_ms" }),
        __metadata("design:type", Number)
    ], PodcastSimple.prototype, "latestPubDateMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listen_score" }),
        __metadata("design:type", Number)
    ], PodcastSimple.prototype, "listenScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listen_score_global_rank" }),
        __metadata("design:type", String)
    ], PodcastSimple.prototype, "listenScoreGlobalRank", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listennotes_url" }),
        __metadata("design:type", String)
    ], PodcastSimple.prototype, "listennotesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=looking_for" }),
        __metadata("design:type", PodcastLookingForField)
    ], PodcastSimple.prototype, "lookingFor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publisher" }),
        __metadata("design:type", String)
    ], PodcastSimple.prototype, "publisher", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rss" }),
        __metadata("design:type", String)
    ], PodcastSimple.prototype, "rss", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbnail" }),
        __metadata("design:type", String)
    ], PodcastSimple.prototype, "thumbnail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], PodcastSimple.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_episodes" }),
        __metadata("design:type", Number)
    ], PodcastSimple.prototype, "totalEpisodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PodcastSimple.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=website" }),
        __metadata("design:type", String)
    ], PodcastSimple.prototype, "website", void 0);
    return PodcastSimple;
}(SpeakeasyBase));
export { PodcastSimple };
