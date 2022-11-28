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
import { CommentSnippetAuthorChannelId } from "./commentsnippetauthorchannelid";
export var CommentSnippetModerationStatusEnum;
(function (CommentSnippetModerationStatusEnum) {
    CommentSnippetModerationStatusEnum["Published"] = "published";
    CommentSnippetModerationStatusEnum["HeldForReview"] = "heldForReview";
    CommentSnippetModerationStatusEnum["LikelySpam"] = "likelySpam";
    CommentSnippetModerationStatusEnum["Rejected"] = "rejected";
})(CommentSnippetModerationStatusEnum || (CommentSnippetModerationStatusEnum = {}));
export var CommentSnippetViewerRatingEnum;
(function (CommentSnippetViewerRatingEnum) {
    CommentSnippetViewerRatingEnum["None"] = "none";
    CommentSnippetViewerRatingEnum["Like"] = "like";
    CommentSnippetViewerRatingEnum["Dislike"] = "dislike";
})(CommentSnippetViewerRatingEnum || (CommentSnippetViewerRatingEnum = {}));
// CommentSnippet
/**
 * Basic details about a comment, such as its author and text.
**/
var CommentSnippet = /** @class */ (function (_super) {
    __extends(CommentSnippet, _super);
    function CommentSnippet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorChannelId" }),
        __metadata("design:type", CommentSnippetAuthorChannelId)
    ], CommentSnippet.prototype, "authorChannelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorChannelUrl" }),
        __metadata("design:type", String)
    ], CommentSnippet.prototype, "authorChannelUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorDisplayName" }),
        __metadata("design:type", String)
    ], CommentSnippet.prototype, "authorDisplayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorProfileImageUrl" }),
        __metadata("design:type", String)
    ], CommentSnippet.prototype, "authorProfileImageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canRate" }),
        __metadata("design:type", Boolean)
    ], CommentSnippet.prototype, "canRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channelId" }),
        __metadata("design:type", String)
    ], CommentSnippet.prototype, "channelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=likeCount" }),
        __metadata("design:type", Number)
    ], CommentSnippet.prototype, "likeCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=moderationStatus" }),
        __metadata("design:type", String)
    ], CommentSnippet.prototype, "moderationStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentId" }),
        __metadata("design:type", String)
    ], CommentSnippet.prototype, "parentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publishedAt" }),
        __metadata("design:type", Date)
    ], CommentSnippet.prototype, "publishedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textDisplay" }),
        __metadata("design:type", String)
    ], CommentSnippet.prototype, "textDisplay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textOriginal" }),
        __metadata("design:type", String)
    ], CommentSnippet.prototype, "textOriginal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatedAt" }),
        __metadata("design:type", Date)
    ], CommentSnippet.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoId" }),
        __metadata("design:type", String)
    ], CommentSnippet.prototype, "videoId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=viewerRating" }),
        __metadata("design:type", String)
    ], CommentSnippet.prototype, "viewerRating", void 0);
    return CommentSnippet;
}(SpeakeasyBase));
export { CommentSnippet };
