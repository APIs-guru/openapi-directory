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
// PromotionBodyLines
/**
 * Block object belonging to a promotion.
**/
var PromotionBodyLines = /** @class */ (function (_super) {
    __extends(PromotionBodyLines, _super);
    function PromotionBodyLines() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=htmlTitle" }),
        __metadata("design:type", String)
    ], PromotionBodyLines.prototype, "htmlTitle", void 0);
    __decorate([
        Metadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], PromotionBodyLines.prototype, "link", void 0);
    __decorate([
        Metadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], PromotionBodyLines.prototype, "title", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PromotionBodyLines.prototype, "url", void 0);
    return PromotionBodyLines;
}(SpeakeasyBase));
export { PromotionBodyLines };
// PromotionImage
/**
 * Image belonging to a promotion.
**/
var PromotionImage = /** @class */ (function (_super) {
    __extends(PromotionImage, _super);
    function PromotionImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], PromotionImage.prototype, "height", void 0);
    __decorate([
        Metadata({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], PromotionImage.prototype, "source", void 0);
    __decorate([
        Metadata({ data: "json, name=width" }),
        __metadata("design:type", Number)
    ], PromotionImage.prototype, "width", void 0);
    return PromotionImage;
}(SpeakeasyBase));
export { PromotionImage };
// Promotion
/**
 * Promotion result.
**/
var Promotion = /** @class */ (function (_super) {
    __extends(Promotion, _super);
    function Promotion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=bodyLines", elemType: shared.PromotionBodyLines }),
        __metadata("design:type", Array)
    ], Promotion.prototype, "bodyLines", void 0);
    __decorate([
        Metadata({ data: "json, name=displayLink" }),
        __metadata("design:type", String)
    ], Promotion.prototype, "displayLink", void 0);
    __decorate([
        Metadata({ data: "json, name=htmlTitle" }),
        __metadata("design:type", String)
    ], Promotion.prototype, "htmlTitle", void 0);
    __decorate([
        Metadata({ data: "json, name=image" }),
        __metadata("design:type", PromotionImage)
    ], Promotion.prototype, "image", void 0);
    __decorate([
        Metadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], Promotion.prototype, "link", void 0);
    __decorate([
        Metadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Promotion.prototype, "title", void 0);
    return Promotion;
}(SpeakeasyBase));
export { Promotion };
