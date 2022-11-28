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
var Article = /** @class */ (function (_super) {
    __extends(Article, _super);
    function Article() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=abstract" }),
        __metadata("design:type", String)
    ], Article.prototype, "abstract", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=byline" }),
        __metadata("design:type", String)
    ], Article.prototype, "byline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column" }),
        __metadata("design:type", String)
    ], Article.prototype, "column", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=des_facet" }),
        __metadata("design:type", Object)
    ], Article.prototype, "desFacet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=geo_facet" }),
        __metadata("design:type", Object)
    ], Article.prototype, "geoFacet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=media" }),
        __metadata("design:type", Object)
    ], Article.prototype, "media", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=org_facet" }),
        __metadata("design:type", Array)
    ], Article.prototype, "orgFacet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=per_facet" }),
        __metadata("design:type", Array)
    ], Article.prototype, "perFacet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=published_date" }),
        __metadata("design:type", String)
    ], Article.prototype, "publishedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=section" }),
        __metadata("design:type", String)
    ], Article.prototype, "section", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], Article.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Article.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Article.prototype, "url", void 0);
    return Article;
}(SpeakeasyBase));
export { Article };
