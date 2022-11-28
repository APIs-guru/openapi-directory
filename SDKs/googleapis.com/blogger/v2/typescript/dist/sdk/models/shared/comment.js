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
// CommentAuthorImage
/**
 * The creator's avatar.
**/
var CommentAuthorImage = /** @class */ (function (_super) {
    __extends(CommentAuthorImage, _super);
    function CommentAuthorImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], CommentAuthorImage.prototype, "url", void 0);
    return CommentAuthorImage;
}(SpeakeasyBase));
export { CommentAuthorImage };
// CommentAuthor
/**
 * The author of this Comment.
**/
var CommentAuthor = /** @class */ (function (_super) {
    __extends(CommentAuthor, _super);
    function CommentAuthor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], CommentAuthor.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CommentAuthor.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", CommentAuthorImage)
    ], CommentAuthor.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], CommentAuthor.prototype, "url", void 0);
    return CommentAuthor;
}(SpeakeasyBase));
export { CommentAuthor };
// CommentBlog
/**
 * Data about the blog containing this comment.
**/
var CommentBlog = /** @class */ (function (_super) {
    __extends(CommentBlog, _super);
    function CommentBlog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CommentBlog.prototype, "id", void 0);
    return CommentBlog;
}(SpeakeasyBase));
export { CommentBlog };
// CommentInReplyTo
/**
 * Data about the comment this is in reply to.
**/
var CommentInReplyTo = /** @class */ (function (_super) {
    __extends(CommentInReplyTo, _super);
    function CommentInReplyTo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CommentInReplyTo.prototype, "id", void 0);
    return CommentInReplyTo;
}(SpeakeasyBase));
export { CommentInReplyTo };
// CommentPost
/**
 * Data about the post containing this comment.
**/
var CommentPost = /** @class */ (function (_super) {
    __extends(CommentPost, _super);
    function CommentPost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CommentPost.prototype, "id", void 0);
    return CommentPost;
}(SpeakeasyBase));
export { CommentPost };
export var CommentStatusEnum;
(function (CommentStatusEnum) {
    CommentStatusEnum["Live"] = "LIVE";
    CommentStatusEnum["Emptied"] = "EMPTIED";
    CommentStatusEnum["Pending"] = "PENDING";
    CommentStatusEnum["Spam"] = "SPAM";
})(CommentStatusEnum || (CommentStatusEnum = {}));
var Comment = /** @class */ (function (_super) {
    __extends(Comment, _super);
    function Comment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author" }),
        __metadata("design:type", CommentAuthor)
    ], Comment.prototype, "author", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blog" }),
        __metadata("design:type", CommentBlog)
    ], Comment.prototype, "blog", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], Comment.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Comment.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inReplyTo" }),
        __metadata("design:type", CommentInReplyTo)
    ], Comment.prototype, "inReplyTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Comment.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=post" }),
        __metadata("design:type", CommentPost)
    ], Comment.prototype, "post", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=published" }),
        __metadata("design:type", String)
    ], Comment.prototype, "published", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], Comment.prototype, "selfLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Comment.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated" }),
        __metadata("design:type", String)
    ], Comment.prototype, "updated", void 0);
    return Comment;
}(SpeakeasyBase));
export { Comment };
