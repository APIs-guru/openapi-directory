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
// PageAuthorImage
/**
 * The creator's avatar.
**/
var PageAuthorImage = /** @class */ (function (_super) {
    __extends(PageAuthorImage, _super);
    function PageAuthorImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PageAuthorImage.prototype, "url", void 0);
    return PageAuthorImage;
}(SpeakeasyBase));
export { PageAuthorImage };
// PageAuthor
/**
 * The author of this Page.
**/
var PageAuthor = /** @class */ (function (_super) {
    __extends(PageAuthor, _super);
    function PageAuthor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], PageAuthor.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PageAuthor.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", PageAuthorImage)
    ], PageAuthor.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PageAuthor.prototype, "url", void 0);
    return PageAuthor;
}(SpeakeasyBase));
export { PageAuthor };
// PageBlog
/**
 * Data about the blog containing this Page.
**/
var PageBlog = /** @class */ (function (_super) {
    __extends(PageBlog, _super);
    function PageBlog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PageBlog.prototype, "id", void 0);
    return PageBlog;
}(SpeakeasyBase));
export { PageBlog };
export var PageStatusEnum;
(function (PageStatusEnum) {
    PageStatusEnum["Live"] = "LIVE";
    PageStatusEnum["Draft"] = "DRAFT";
    PageStatusEnum["SoftTrashed"] = "SOFT_TRASHED";
})(PageStatusEnum || (PageStatusEnum = {}));
var Page = /** @class */ (function (_super) {
    __extends(Page, _super);
    function Page() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author" }),
        __metadata("design:type", PageAuthor)
    ], Page.prototype, "author", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blog" }),
        __metadata("design:type", PageBlog)
    ], Page.prototype, "blog", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], Page.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], Page.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Page.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Page.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=published" }),
        __metadata("design:type", String)
    ], Page.prototype, "published", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], Page.prototype, "selfLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Page.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Page.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trashed" }),
        __metadata("design:type", String)
    ], Page.prototype, "trashed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated" }),
        __metadata("design:type", String)
    ], Page.prototype, "updated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Page.prototype, "url", void 0);
    return Page;
}(SpeakeasyBase));
export { Page };
