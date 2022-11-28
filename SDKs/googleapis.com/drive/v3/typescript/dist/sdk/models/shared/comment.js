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
import { User } from "./user";
import { Reply } from "./reply";
// CommentQuotedFileContent
/**
 * The file content to which the comment refers, typically within the anchor region. For a text file, for example, this would be the text at the location of the comment.
**/
var CommentQuotedFileContent = /** @class */ (function (_super) {
    __extends(CommentQuotedFileContent, _super);
    function CommentQuotedFileContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mimeType" }),
        __metadata("design:type", String)
    ], CommentQuotedFileContent.prototype, "mimeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], CommentQuotedFileContent.prototype, "value", void 0);
    return CommentQuotedFileContent;
}(SpeakeasyBase));
export { CommentQuotedFileContent };
// Comment
/**
 * A comment on a file.
**/
var Comment = /** @class */ (function (_super) {
    __extends(Comment, _super);
    function Comment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=anchor" }),
        __metadata("design:type", String)
    ], Comment.prototype, "anchor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author" }),
        __metadata("design:type", User)
    ], Comment.prototype, "author", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], Comment.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdTime" }),
        __metadata("design:type", Date)
    ], Comment.prototype, "createdTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], Comment.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=htmlContent" }),
        __metadata("design:type", String)
    ], Comment.prototype, "htmlContent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Comment.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Comment.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modifiedTime" }),
        __metadata("design:type", Date)
    ], Comment.prototype, "modifiedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quotedFileContent" }),
        __metadata("design:type", CommentQuotedFileContent)
    ], Comment.prototype, "quotedFileContent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replies", elemType: Reply }),
        __metadata("design:type", Array)
    ], Comment.prototype, "replies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resolved" }),
        __metadata("design:type", Boolean)
    ], Comment.prototype, "resolved", void 0);
    return Comment;
}(SpeakeasyBase));
export { Comment };
