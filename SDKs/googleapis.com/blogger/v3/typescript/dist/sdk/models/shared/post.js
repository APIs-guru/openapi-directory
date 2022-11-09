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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
// PostAuthorImage
/**
 * The creator's avatar.
**/
var PostAuthorImage = /** @class */ (function (_super) {
    __extends(PostAuthorImage, _super);
    function PostAuthorImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PostAuthorImage.prototype, "url", void 0);
    return PostAuthorImage;
}(SpeakeasyBase));
export { PostAuthorImage };
// PostAuthor
/**
 * The author of this Post.
**/
var PostAuthor = /** @class */ (function (_super) {
    __extends(PostAuthor, _super);
    function PostAuthor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], PostAuthor.prototype, "displayName", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PostAuthor.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=image" }),
        __metadata("design:type", PostAuthorImage)
    ], PostAuthor.prototype, "image", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PostAuthor.prototype, "url", void 0);
    return PostAuthor;
}(SpeakeasyBase));
export { PostAuthor };
// PostBlog
/**
 * Data about the blog containing this Post.
**/
var PostBlog = /** @class */ (function (_super) {
    __extends(PostBlog, _super);
    function PostBlog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PostBlog.prototype, "id", void 0);
    return PostBlog;
}(SpeakeasyBase));
export { PostBlog };
var PostImages = /** @class */ (function (_super) {
    __extends(PostImages, _super);
    function PostImages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PostImages.prototype, "url", void 0);
    return PostImages;
}(SpeakeasyBase));
export { PostImages };
// PostLocation
/**
 * The location for geotagged posts.
**/
var PostLocation = /** @class */ (function (_super) {
    __extends(PostLocation, _super);
    function PostLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=lat" }),
        __metadata("design:type", Number)
    ], PostLocation.prototype, "lat", void 0);
    __decorate([
        Metadata({ data: "json, name=lng" }),
        __metadata("design:type", Number)
    ], PostLocation.prototype, "lng", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostLocation.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=span" }),
        __metadata("design:type", String)
    ], PostLocation.prototype, "span", void 0);
    return PostLocation;
}(SpeakeasyBase));
export { PostLocation };
export var PostReaderCommentsEnum;
(function (PostReaderCommentsEnum) {
    PostReaderCommentsEnum["Allow"] = "ALLOW";
    PostReaderCommentsEnum["DontAllowShowExisting"] = "DONT_ALLOW_SHOW_EXISTING";
    PostReaderCommentsEnum["DontAllowHideExisting"] = "DONT_ALLOW_HIDE_EXISTING";
})(PostReaderCommentsEnum || (PostReaderCommentsEnum = {}));
// PostReplies
/**
 * The container of comments on this Post.
**/
var PostReplies = /** @class */ (function (_super) {
    __extends(PostReplies, _super);
    function PostReplies() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=items", elemType: shared.Comment }),
        __metadata("design:type", Array)
    ], PostReplies.prototype, "items", void 0);
    __decorate([
        Metadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], PostReplies.prototype, "selfLink", void 0);
    __decorate([
        Metadata({ data: "json, name=totalItems" }),
        __metadata("design:type", String)
    ], PostReplies.prototype, "totalItems", void 0);
    return PostReplies;
}(SpeakeasyBase));
export { PostReplies };
export var PostStatusEnum;
(function (PostStatusEnum) {
    PostStatusEnum["Live"] = "LIVE";
    PostStatusEnum["Draft"] = "DRAFT";
    PostStatusEnum["Scheduled"] = "SCHEDULED";
    PostStatusEnum["SoftTrashed"] = "SOFT_TRASHED";
})(PostStatusEnum || (PostStatusEnum = {}));
var Post = /** @class */ (function (_super) {
    __extends(Post, _super);
    function Post() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=author" }),
        __metadata("design:type", PostAuthor)
    ], Post.prototype, "author", void 0);
    __decorate([
        Metadata({ data: "json, name=blog" }),
        __metadata("design:type", PostBlog)
    ], Post.prototype, "blog", void 0);
    __decorate([
        Metadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], Post.prototype, "content", void 0);
    __decorate([
        Metadata({ data: "json, name=customMetaData" }),
        __metadata("design:type", String)
    ], Post.prototype, "customMetaData", void 0);
    __decorate([
        Metadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], Post.prototype, "etag", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Post.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=images", elemType: shared.PostImages }),
        __metadata("design:type", Array)
    ], Post.prototype, "images", void 0);
    __decorate([
        Metadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Post.prototype, "kind", void 0);
    __decorate([
        Metadata({ data: "json, name=labels" }),
        __metadata("design:type", Array)
    ], Post.prototype, "labels", void 0);
    __decorate([
        Metadata({ data: "json, name=location" }),
        __metadata("design:type", PostLocation)
    ], Post.prototype, "location", void 0);
    __decorate([
        Metadata({ data: "json, name=published" }),
        __metadata("design:type", String)
    ], Post.prototype, "published", void 0);
    __decorate([
        Metadata({ data: "json, name=readerComments" }),
        __metadata("design:type", String)
    ], Post.prototype, "readerComments", void 0);
    __decorate([
        Metadata({ data: "json, name=replies" }),
        __metadata("design:type", PostReplies)
    ], Post.prototype, "replies", void 0);
    __decorate([
        Metadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], Post.prototype, "selfLink", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Post.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Post.prototype, "title", void 0);
    __decorate([
        Metadata({ data: "json, name=titleLink" }),
        __metadata("design:type", String)
    ], Post.prototype, "titleLink", void 0);
    __decorate([
        Metadata({ data: "json, name=trashed" }),
        __metadata("design:type", String)
    ], Post.prototype, "trashed", void 0);
    __decorate([
        Metadata({ data: "json, name=updated" }),
        __metadata("design:type", String)
    ], Post.prototype, "updated", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Post.prototype, "url", void 0);
    return Post;
}(SpeakeasyBase));
export { Post };
