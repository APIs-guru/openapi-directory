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
var PodcastExtraField = /** @class */ (function (_super) {
    __extends(PodcastExtraField, _super);
    function PodcastExtraField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=facebook_handle" }),
        __metadata("design:type", String)
    ], PodcastExtraField.prototype, "facebookHandle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=google_url" }),
        __metadata("design:type", String)
    ], PodcastExtraField.prototype, "googleUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instagram_handle" }),
        __metadata("design:type", String)
    ], PodcastExtraField.prototype, "instagramHandle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkedin_url" }),
        __metadata("design:type", String)
    ], PodcastExtraField.prototype, "linkedinUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=patreon_handle" }),
        __metadata("design:type", String)
    ], PodcastExtraField.prototype, "patreonHandle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spotify_url" }),
        __metadata("design:type", String)
    ], PodcastExtraField.prototype, "spotifyUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=twitter_handle" }),
        __metadata("design:type", String)
    ], PodcastExtraField.prototype, "twitterHandle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url1" }),
        __metadata("design:type", String)
    ], PodcastExtraField.prototype, "url1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url2" }),
        __metadata("design:type", String)
    ], PodcastExtraField.prototype, "url2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url3" }),
        __metadata("design:type", String)
    ], PodcastExtraField.prototype, "url3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wechat_handle" }),
        __metadata("design:type", String)
    ], PodcastExtraField.prototype, "wechatHandle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=youtube_url" }),
        __metadata("design:type", String)
    ], PodcastExtraField.prototype, "youtubeUrl", void 0);
    return PodcastExtraField;
}(SpeakeasyBase));
export { PodcastExtraField };
