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
// ReviewAuthor
/**
 * Author of this review.
**/
var ReviewAuthor = /** @class */ (function (_super) {
    __extends(ReviewAuthor, _super);
    function ReviewAuthor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ReviewAuthor.prototype, "displayName", void 0);
    return ReviewAuthor;
}(SpeakeasyBase));
export { ReviewAuthor };
// ReviewSource
/**
 * Information regarding the source of this review, when the review is not from a Google Books user.
**/
var ReviewSource = /** @class */ (function (_super) {
    __extends(ReviewSource, _super);
    function ReviewSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ReviewSource.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extraDescription" }),
        __metadata("design:type", String)
    ], ReviewSource.prototype, "extraDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ReviewSource.prototype, "url", void 0);
    return ReviewSource;
}(SpeakeasyBase));
export { ReviewSource };
var Review = /** @class */ (function (_super) {
    __extends(Review, _super);
    function Review() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author" }),
        __metadata("design:type", ReviewAuthor)
    ], Review.prototype, "author", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], Review.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", String)
    ], Review.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fullTextUrl" }),
        __metadata("design:type", String)
    ], Review.prototype, "fullTextUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Review.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rating" }),
        __metadata("design:type", String)
    ], Review.prototype, "rating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", ReviewSource)
    ], Review.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Review.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Review.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volumeId" }),
        __metadata("design:type", String)
    ], Review.prototype, "volumeId", void 0);
    return Review;
}(SpeakeasyBase));
export { Review };
