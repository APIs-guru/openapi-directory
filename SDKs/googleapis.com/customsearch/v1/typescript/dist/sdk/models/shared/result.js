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
// ResultImage
/**
 * Image belonging to a custom search result.
**/
var ResultImage = /** @class */ (function (_super) {
    __extends(ResultImage, _super);
    function ResultImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=byteSize" }),
        __metadata("design:type", Number)
    ], ResultImage.prototype, "byteSize", void 0);
    __decorate([
        Metadata({ data: "json, name=contextLink" }),
        __metadata("design:type", String)
    ], ResultImage.prototype, "contextLink", void 0);
    __decorate([
        Metadata({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], ResultImage.prototype, "height", void 0);
    __decorate([
        Metadata({ data: "json, name=thumbnailHeight" }),
        __metadata("design:type", Number)
    ], ResultImage.prototype, "thumbnailHeight", void 0);
    __decorate([
        Metadata({ data: "json, name=thumbnailLink" }),
        __metadata("design:type", String)
    ], ResultImage.prototype, "thumbnailLink", void 0);
    __decorate([
        Metadata({ data: "json, name=thumbnailWidth" }),
        __metadata("design:type", Number)
    ], ResultImage.prototype, "thumbnailWidth", void 0);
    __decorate([
        Metadata({ data: "json, name=width" }),
        __metadata("design:type", Number)
    ], ResultImage.prototype, "width", void 0);
    return ResultImage;
}(SpeakeasyBase));
export { ResultImage };
// ResultLabels
/**
 * Refinement label associated with a custom search result.
**/
var ResultLabels = /** @class */ (function (_super) {
    __extends(ResultLabels, _super);
    function ResultLabels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ResultLabels.prototype, "displayName", void 0);
    __decorate([
        Metadata({ data: "json, name=label_with_op" }),
        __metadata("design:type", String)
    ], ResultLabels.prototype, "labelWithOp", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ResultLabels.prototype, "name", void 0);
    return ResultLabels;
}(SpeakeasyBase));
export { ResultLabels };
// Result
/**
 * A custom search result.
**/
var Result = /** @class */ (function (_super) {
    __extends(Result, _super);
    function Result() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=cacheId" }),
        __metadata("design:type", String)
    ], Result.prototype, "cacheId", void 0);
    __decorate([
        Metadata({ data: "json, name=displayLink" }),
        __metadata("design:type", String)
    ], Result.prototype, "displayLink", void 0);
    __decorate([
        Metadata({ data: "json, name=fileFormat" }),
        __metadata("design:type", String)
    ], Result.prototype, "fileFormat", void 0);
    __decorate([
        Metadata({ data: "json, name=formattedUrl" }),
        __metadata("design:type", String)
    ], Result.prototype, "formattedUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=htmlFormattedUrl" }),
        __metadata("design:type", String)
    ], Result.prototype, "htmlFormattedUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=htmlSnippet" }),
        __metadata("design:type", String)
    ], Result.prototype, "htmlSnippet", void 0);
    __decorate([
        Metadata({ data: "json, name=htmlTitle" }),
        __metadata("design:type", String)
    ], Result.prototype, "htmlTitle", void 0);
    __decorate([
        Metadata({ data: "json, name=image" }),
        __metadata("design:type", ResultImage)
    ], Result.prototype, "image", void 0);
    __decorate([
        Metadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Result.prototype, "kind", void 0);
    __decorate([
        Metadata({ data: "json, name=labels", elemType: shared.ResultLabels }),
        __metadata("design:type", Array)
    ], Result.prototype, "labels", void 0);
    __decorate([
        Metadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], Result.prototype, "link", void 0);
    __decorate([
        Metadata({ data: "json, name=mime" }),
        __metadata("design:type", String)
    ], Result.prototype, "mime", void 0);
    __decorate([
        Metadata({ data: "json, name=pagemap" }),
        __metadata("design:type", Map)
    ], Result.prototype, "pagemap", void 0);
    __decorate([
        Metadata({ data: "json, name=snippet" }),
        __metadata("design:type", String)
    ], Result.prototype, "snippet", void 0);
    __decorate([
        Metadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Result.prototype, "title", void 0);
    return Result;
}(SpeakeasyBase));
export { Result };
