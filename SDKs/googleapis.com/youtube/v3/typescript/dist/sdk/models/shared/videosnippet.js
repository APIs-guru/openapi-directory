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
import { VideoLocalization } from "./videolocalization";
import { ThumbnailDetails } from "./thumbnaildetails";
export var VideoSnippetLiveBroadcastContentEnum;
(function (VideoSnippetLiveBroadcastContentEnum) {
    VideoSnippetLiveBroadcastContentEnum["None"] = "none";
    VideoSnippetLiveBroadcastContentEnum["Upcoming"] = "upcoming";
    VideoSnippetLiveBroadcastContentEnum["Live"] = "live";
    VideoSnippetLiveBroadcastContentEnum["Completed"] = "completed";
})(VideoSnippetLiveBroadcastContentEnum || (VideoSnippetLiveBroadcastContentEnum = {}));
// VideoSnippet
/**
 * Basic details about a video, including title, description, uploader, thumbnails and category.
**/
var VideoSnippet = /** @class */ (function (_super) {
    __extends(VideoSnippet, _super);
    function VideoSnippet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categoryId" }),
        __metadata("design:type", String)
    ], VideoSnippet.prototype, "categoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channelId" }),
        __metadata("design:type", String)
    ], VideoSnippet.prototype, "channelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channelTitle" }),
        __metadata("design:type", String)
    ], VideoSnippet.prototype, "channelTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultAudioLanguage" }),
        __metadata("design:type", String)
    ], VideoSnippet.prototype, "defaultAudioLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultLanguage" }),
        __metadata("design:type", String)
    ], VideoSnippet.prototype, "defaultLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], VideoSnippet.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=liveBroadcastContent" }),
        __metadata("design:type", String)
    ], VideoSnippet.prototype, "liveBroadcastContent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localized" }),
        __metadata("design:type", VideoLocalization)
    ], VideoSnippet.prototype, "localized", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publishedAt" }),
        __metadata("design:type", Date)
    ], VideoSnippet.prototype, "publishedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], VideoSnippet.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbnails" }),
        __metadata("design:type", ThumbnailDetails)
    ], VideoSnippet.prototype, "thumbnails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], VideoSnippet.prototype, "title", void 0);
    return VideoSnippet;
}(SpeakeasyBase));
export { VideoSnippet };
