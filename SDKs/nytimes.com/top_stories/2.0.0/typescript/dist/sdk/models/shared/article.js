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
var ArticleMultimedia = /** @class */ (function (_super) {
    __extends(ArticleMultimedia, _super);
    function ArticleMultimedia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=caption" }),
        __metadata("design:type", String)
    ], ArticleMultimedia.prototype, "caption", void 0);
    __decorate([
        Metadata({ data: "json, name=copyright" }),
        __metadata("design:type", String)
    ], ArticleMultimedia.prototype, "copyright", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], ArticleMultimedia.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], ArticleMultimedia.prototype, "height", void 0);
    __decorate([
        Metadata({ data: "json, name=subtype" }),
        __metadata("design:type", String)
    ], ArticleMultimedia.prototype, "subtype", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ArticleMultimedia.prototype, "type", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ArticleMultimedia.prototype, "url", void 0);
    __decorate([
        Metadata({ data: "json, name=width" }),
        __metadata("design:type", Number)
    ], ArticleMultimedia.prototype, "width", void 0);
    return ArticleMultimedia;
}(SpeakeasyBase));
export { ArticleMultimedia };
var ArticleRelatedUrls = /** @class */ (function (_super) {
    __extends(ArticleRelatedUrls, _super);
    function ArticleRelatedUrls() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=suggested_link_text" }),
        __metadata("design:type", String)
    ], ArticleRelatedUrls.prototype, "suggestedLinkText", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ArticleRelatedUrls.prototype, "url", void 0);
    return ArticleRelatedUrls;
}(SpeakeasyBase));
export { ArticleRelatedUrls };
var Article = /** @class */ (function (_super) {
    __extends(Article, _super);
    function Article() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=abstract" }),
        __metadata("design:type", String)
    ], Article.prototype, "abstract", void 0);
    __decorate([
        Metadata({ data: "json, name=byline" }),
        __metadata("design:type", String)
    ], Article.prototype, "byline", void 0);
    __decorate([
        Metadata({ data: "json, name=created_date" }),
        __metadata("design:type", String)
    ], Article.prototype, "createdDate", void 0);
    __decorate([
        Metadata({ data: "json, name=des_facet" }),
        __metadata("design:type", Array)
    ], Article.prototype, "desFacet", void 0);
    __decorate([
        Metadata({ data: "json, name=geo_facet" }),
        __metadata("design:type", Array)
    ], Article.prototype, "geoFacet", void 0);
    __decorate([
        Metadata({ data: "json, name=item_type" }),
        __metadata("design:type", String)
    ], Article.prototype, "itemType", void 0);
    __decorate([
        Metadata({ data: "json, name=kicker" }),
        __metadata("design:type", String)
    ], Article.prototype, "kicker", void 0);
    __decorate([
        Metadata({ data: "json, name=material_type_facet" }),
        __metadata("design:type", String)
    ], Article.prototype, "materialTypeFacet", void 0);
    __decorate([
        Metadata({ data: "json, name=multimedia", elemType: shared.ArticleMultimedia }),
        __metadata("design:type", Array)
    ], Article.prototype, "multimedia", void 0);
    __decorate([
        Metadata({ data: "json, name=org_facet" }),
        __metadata("design:type", Array)
    ], Article.prototype, "orgFacet", void 0);
    __decorate([
        Metadata({ data: "json, name=per_facet" }),
        __metadata("design:type", Array)
    ], Article.prototype, "perFacet", void 0);
    __decorate([
        Metadata({ data: "json, name=published_date" }),
        __metadata("design:type", String)
    ], Article.prototype, "publishedDate", void 0);
    __decorate([
        Metadata({ data: "json, name=related_urls", elemType: shared.ArticleRelatedUrls }),
        __metadata("design:type", Array)
    ], Article.prototype, "relatedUrls", void 0);
    __decorate([
        Metadata({ data: "json, name=section" }),
        __metadata("design:type", String)
    ], Article.prototype, "section", void 0);
    __decorate([
        Metadata({ data: "json, name=short_url" }),
        __metadata("design:type", String)
    ], Article.prototype, "shortUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=subsection" }),
        __metadata("design:type", String)
    ], Article.prototype, "subsection", void 0);
    __decorate([
        Metadata({ data: "json, name=thumbnail_standard" }),
        __metadata("design:type", String)
    ], Article.prototype, "thumbnailStandard", void 0);
    __decorate([
        Metadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Article.prototype, "title", void 0);
    __decorate([
        Metadata({ data: "json, name=updated_date" }),
        __metadata("design:type", String)
    ], Article.prototype, "updatedDate", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Article.prototype, "url", void 0);
    return Article;
}(SpeakeasyBase));
export { Article };
