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
var MovieLink = /** @class */ (function (_super) {
    __extends(MovieLink, _super);
    function MovieLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suggested_link_text" }),
        __metadata("design:type", String)
    ], MovieLink.prototype, "suggestedLinkText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], MovieLink.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], MovieLink.prototype, "url", void 0);
    return MovieLink;
}(SpeakeasyBase));
export { MovieLink };
var MovieMultimediaResource = /** @class */ (function (_super) {
    __extends(MovieMultimediaResource, _super);
    function MovieMultimediaResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], MovieMultimediaResource.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=src" }),
        __metadata("design:type", String)
    ], MovieMultimediaResource.prototype, "src", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], MovieMultimediaResource.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=width" }),
        __metadata("design:type", Number)
    ], MovieMultimediaResource.prototype, "width", void 0);
    return MovieMultimediaResource;
}(SpeakeasyBase));
export { MovieMultimediaResource };
var MovieMultimedia = /** @class */ (function (_super) {
    __extends(MovieMultimedia, _super);
    function MovieMultimedia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource" }),
        __metadata("design:type", MovieMultimediaResource)
    ], MovieMultimedia.prototype, "resource", void 0);
    return MovieMultimedia;
}(SpeakeasyBase));
export { MovieMultimedia };
var Movie = /** @class */ (function (_super) {
    __extends(Movie, _super);
    function Movie() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=byline" }),
        __metadata("design:type", String)
    ], Movie.prototype, "byline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=critics_pick" }),
        __metadata("design:type", Number)
    ], Movie.prototype, "criticsPick", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_updated" }),
        __metadata("design:type", String)
    ], Movie.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_title" }),
        __metadata("design:type", String)
    ], Movie.prototype, "displayTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headline" }),
        __metadata("design:type", String)
    ], Movie.prototype, "headline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", MovieLink)
    ], Movie.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mpaa_rating" }),
        __metadata("design:type", String)
    ], Movie.prototype, "mpaaRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=multimedia" }),
        __metadata("design:type", MovieMultimedia)
    ], Movie.prototype, "multimedia", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=opening_date" }),
        __metadata("design:type", String)
    ], Movie.prototype, "openingDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publication_date" }),
        __metadata("design:type", String)
    ], Movie.prototype, "publicationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=summary_short" }),
        __metadata("design:type", String)
    ], Movie.prototype, "summaryShort", void 0);
    return Movie;
}(SpeakeasyBase));
export { Movie };
