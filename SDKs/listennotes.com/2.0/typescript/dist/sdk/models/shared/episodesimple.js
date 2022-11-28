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
import { PodcastMinimum } from "./podcastminimum";
var EpisodeSimple = /** @class */ (function (_super) {
    __extends(EpisodeSimple, _super);
    function EpisodeSimple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audio" }),
        __metadata("design:type", String)
    ], EpisodeSimple.prototype, "audio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audio_length_sec" }),
        __metadata("design:type", Number)
    ], EpisodeSimple.prototype, "audioLengthSec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], EpisodeSimple.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=explicit_content" }),
        __metadata("design:type", Boolean)
    ], EpisodeSimple.prototype, "explicitContent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], EpisodeSimple.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", String)
    ], EpisodeSimple.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], EpisodeSimple.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listennotes_edit_url" }),
        __metadata("design:type", String)
    ], EpisodeSimple.prototype, "listennotesEditUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listennotes_url" }),
        __metadata("design:type", String)
    ], EpisodeSimple.prototype, "listennotesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maybe_audio_invalid" }),
        __metadata("design:type", Boolean)
    ], EpisodeSimple.prototype, "maybeAudioInvalid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=podcast" }),
        __metadata("design:type", PodcastMinimum)
    ], EpisodeSimple.prototype, "podcast", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pub_date_ms" }),
        __metadata("design:type", Number)
    ], EpisodeSimple.prototype, "pubDateMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbnail" }),
        __metadata("design:type", String)
    ], EpisodeSimple.prototype, "thumbnail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], EpisodeSimple.prototype, "title", void 0);
    return EpisodeSimple;
}(SpeakeasyBase));
export { EpisodeSimple };
