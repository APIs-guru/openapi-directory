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
// BlogLocale
/**
 * The locale this Blog is set to.
**/
var BlogLocale = /** @class */ (function (_super) {
    __extends(BlogLocale, _super);
    function BlogLocale() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], BlogLocale.prototype, "country", void 0);
    __decorate([
        Metadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], BlogLocale.prototype, "language", void 0);
    __decorate([
        Metadata({ data: "json, name=variant" }),
        __metadata("design:type", String)
    ], BlogLocale.prototype, "variant", void 0);
    return BlogLocale;
}(SpeakeasyBase));
export { BlogLocale };
// BlogPages
/**
 * The container of pages in this blog.
**/
var BlogPages = /** @class */ (function (_super) {
    __extends(BlogPages, _super);
    function BlogPages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], BlogPages.prototype, "selfLink", void 0);
    __decorate([
        Metadata({ data: "json, name=totalItems" }),
        __metadata("design:type", Number)
    ], BlogPages.prototype, "totalItems", void 0);
    return BlogPages;
}(SpeakeasyBase));
export { BlogPages };
// BlogPosts
/**
 * The container of posts in this blog.
**/
var BlogPosts = /** @class */ (function (_super) {
    __extends(BlogPosts, _super);
    function BlogPosts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=items", elemType: shared.Post }),
        __metadata("design:type", Array)
    ], BlogPosts.prototype, "items", void 0);
    __decorate([
        Metadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], BlogPosts.prototype, "selfLink", void 0);
    __decorate([
        Metadata({ data: "json, name=totalItems" }),
        __metadata("design:type", Number)
    ], BlogPosts.prototype, "totalItems", void 0);
    return BlogPosts;
}(SpeakeasyBase));
export { BlogPosts };
export var BlogStatusEnum;
(function (BlogStatusEnum) {
    BlogStatusEnum["Live"] = "LIVE";
    BlogStatusEnum["Deleted"] = "DELETED";
})(BlogStatusEnum || (BlogStatusEnum = {}));
var Blog = /** @class */ (function (_super) {
    __extends(Blog, _super);
    function Blog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=customMetaData" }),
        __metadata("design:type", String)
    ], Blog.prototype, "customMetaData", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Blog.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Blog.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Blog.prototype, "kind", void 0);
    __decorate([
        Metadata({ data: "json, name=locale" }),
        __metadata("design:type", BlogLocale)
    ], Blog.prototype, "locale", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Blog.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=pages" }),
        __metadata("design:type", BlogPages)
    ], Blog.prototype, "pages", void 0);
    __decorate([
        Metadata({ data: "json, name=posts" }),
        __metadata("design:type", BlogPosts)
    ], Blog.prototype, "posts", void 0);
    __decorate([
        Metadata({ data: "json, name=published" }),
        __metadata("design:type", String)
    ], Blog.prototype, "published", void 0);
    __decorate([
        Metadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], Blog.prototype, "selfLink", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Blog.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=updated" }),
        __metadata("design:type", String)
    ], Blog.prototype, "updated", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Blog.prototype, "url", void 0);
    return Blog;
}(SpeakeasyBase));
export { Blog };
