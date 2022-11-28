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
import { PodcastMinimum } from "./podcastminimum";
// CuratedListSearchResult
/**
 * When **type** is *curated*.
**/
var CuratedListSearchResult = /** @class */ (function (_super) {
    __extends(CuratedListSearchResult, _super);
    function CuratedListSearchResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description_highlighted" }),
        __metadata("design:type", String)
    ], CuratedListSearchResult.prototype, "descriptionHighlighted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description_original" }),
        __metadata("design:type", String)
    ], CuratedListSearchResult.prototype, "descriptionOriginal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CuratedListSearchResult.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listennotes_url" }),
        __metadata("design:type", String)
    ], CuratedListSearchResult.prototype, "listennotesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=podcasts", elemType: PodcastMinimum }),
        __metadata("design:type", Array)
    ], CuratedListSearchResult.prototype, "podcasts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pub_date_ms" }),
        __metadata("design:type", Number)
    ], CuratedListSearchResult.prototype, "pubDateMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_domain" }),
        __metadata("design:type", String)
    ], CuratedListSearchResult.prototype, "sourceDomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_url" }),
        __metadata("design:type", String)
    ], CuratedListSearchResult.prototype, "sourceUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title_highlighted" }),
        __metadata("design:type", String)
    ], CuratedListSearchResult.prototype, "titleHighlighted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title_original" }),
        __metadata("design:type", String)
    ], CuratedListSearchResult.prototype, "titleOriginal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], CuratedListSearchResult.prototype, "total", void 0);
    return CuratedListSearchResult;
}(SpeakeasyBase));
export { CuratedListSearchResult };
