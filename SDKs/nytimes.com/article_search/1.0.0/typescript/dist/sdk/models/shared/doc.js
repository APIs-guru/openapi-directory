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
var DocByline = /** @class */ (function (_super) {
    __extends(DocByline, _super);
    function DocByline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization" }),
        __metadata("design:type", String)
    ], DocByline.prototype, "organization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=original" }),
        __metadata("design:type", String)
    ], DocByline.prototype, "original", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=person" }),
        __metadata("design:type", Array)
    ], DocByline.prototype, "person", void 0);
    return DocByline;
}(SpeakeasyBase));
export { DocByline };
var DocHeadline = /** @class */ (function (_super) {
    __extends(DocHeadline, _super);
    function DocHeadline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kicker" }),
        __metadata("design:type", String)
    ], DocHeadline.prototype, "kicker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=main" }),
        __metadata("design:type", String)
    ], DocHeadline.prototype, "main", void 0);
    return DocHeadline;
}(SpeakeasyBase));
export { DocHeadline };
var DocKeywords = /** @class */ (function (_super) {
    __extends(DocKeywords, _super);
    function DocKeywords() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DocKeywords.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rank" }),
        __metadata("design:type", String)
    ], DocKeywords.prototype, "rank", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], DocKeywords.prototype, "value", void 0);
    return DocKeywords;
}(SpeakeasyBase));
export { DocKeywords };
var DocMultimedia = /** @class */ (function (_super) {
    __extends(DocMultimedia, _super);
    function DocMultimedia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=caption" }),
        __metadata("design:type", String)
    ], DocMultimedia.prototype, "caption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=copyright" }),
        __metadata("design:type", String)
    ], DocMultimedia.prototype, "copyright", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], DocMultimedia.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], DocMultimedia.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subtype" }),
        __metadata("design:type", String)
    ], DocMultimedia.prototype, "subtype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], DocMultimedia.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], DocMultimedia.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=width" }),
        __metadata("design:type", Number)
    ], DocMultimedia.prototype, "width", void 0);
    return DocMultimedia;
}(SpeakeasyBase));
export { DocMultimedia };
var Doc = /** @class */ (function (_super) {
    __extends(Doc, _super);
    function Doc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_id" }),
        __metadata("design:type", String)
    ], Doc.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=abstract" }),
        __metadata("design:type", String)
    ], Doc.prototype, "abstract", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blog" }),
        __metadata("design:type", Array)
    ], Doc.prototype, "blog", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=byline" }),
        __metadata("design:type", DocByline)
    ], Doc.prototype, "byline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=document_type" }),
        __metadata("design:type", String)
    ], Doc.prototype, "documentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headline" }),
        __metadata("design:type", DocHeadline)
    ], Doc.prototype, "headline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keywords" }),
        __metadata("design:type", DocKeywords)
    ], Doc.prototype, "keywords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lead_paragraph" }),
        __metadata("design:type", String)
    ], Doc.prototype, "leadParagraph", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=multimedia", elemType: DocMultimedia }),
        __metadata("design:type", Array)
    ], Doc.prototype, "multimedia", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=news_desk" }),
        __metadata("design:type", String)
    ], Doc.prototype, "newsDesk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=print_page" }),
        __metadata("design:type", String)
    ], Doc.prototype, "printPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pub_date" }),
        __metadata("design:type", String)
    ], Doc.prototype, "pubDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=section_name" }),
        __metadata("design:type", String)
    ], Doc.prototype, "sectionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slideshow_credits" }),
        __metadata("design:type", String)
    ], Doc.prototype, "slideshowCredits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snippet" }),
        __metadata("design:type", String)
    ], Doc.prototype, "snippet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], Doc.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subsection_name" }),
        __metadata("design:type", String)
    ], Doc.prototype, "subsectionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type_of_material" }),
        __metadata("design:type", String)
    ], Doc.prototype, "typeOfMaterial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=web_url" }),
        __metadata("design:type", String)
    ], Doc.prototype, "webUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=word_count" }),
        __metadata("design:type", String)
    ], Doc.prototype, "wordCount", void 0);
    return Doc;
}(SpeakeasyBase));
export { Doc };
