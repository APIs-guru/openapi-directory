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
import * as shared from "../shared";
var HeadStudioImagePathParams = /** @class */ (function (_super) {
    __extends(HeadStudioImagePathParams, _super);
    function HeadStudioImagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=imageType" }),
        __metadata("design:type", String)
    ], HeadStudioImagePathParams.prototype, "imageType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], HeadStudioImagePathParams.prototype, "name", void 0);
    return HeadStudioImagePathParams;
}(SpeakeasyBase));
export { HeadStudioImagePathParams };
var HeadStudioImageQueryParams = /** @class */ (function (_super) {
    __extends(HeadStudioImageQueryParams, _super);
    function HeadStudioImageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=addPlayedIndicator" }),
        __metadata("design:type", Boolean)
    ], HeadStudioImageQueryParams.prototype, "addPlayedIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=backgroundColor" }),
        __metadata("design:type", String)
    ], HeadStudioImageQueryParams.prototype, "backgroundColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=blur" }),
        __metadata("design:type", Number)
    ], HeadStudioImageQueryParams.prototype, "blur", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cropWhitespace" }),
        __metadata("design:type", Boolean)
    ], HeadStudioImageQueryParams.prototype, "cropWhitespace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=foregroundLayer" }),
        __metadata("design:type", String)
    ], HeadStudioImageQueryParams.prototype, "foregroundLayer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], HeadStudioImageQueryParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=height" }),
        __metadata("design:type", Number)
    ], HeadStudioImageQueryParams.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imageIndex" }),
        __metadata("design:type", Number)
    ], HeadStudioImageQueryParams.prototype, "imageIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxHeight" }),
        __metadata("design:type", Number)
    ], HeadStudioImageQueryParams.prototype, "maxHeight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxWidth" }),
        __metadata("design:type", Number)
    ], HeadStudioImageQueryParams.prototype, "maxWidth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=percentPlayed" }),
        __metadata("design:type", Number)
    ], HeadStudioImageQueryParams.prototype, "percentPlayed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quality" }),
        __metadata("design:type", Number)
    ], HeadStudioImageQueryParams.prototype, "quality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" }),
        __metadata("design:type", String)
    ], HeadStudioImageQueryParams.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unplayedCount" }),
        __metadata("design:type", Number)
    ], HeadStudioImageQueryParams.prototype, "unplayedCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=width" }),
        __metadata("design:type", Number)
    ], HeadStudioImageQueryParams.prototype, "width", void 0);
    return HeadStudioImageQueryParams;
}(SpeakeasyBase));
export { HeadStudioImageQueryParams };
var HeadStudioImageRequest = /** @class */ (function (_super) {
    __extends(HeadStudioImageRequest, _super);
    function HeadStudioImageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HeadStudioImagePathParams)
    ], HeadStudioImageRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HeadStudioImageQueryParams)
    ], HeadStudioImageRequest.prototype, "queryParams", void 0);
    return HeadStudioImageRequest;
}(SpeakeasyBase));
export { HeadStudioImageRequest };
var HeadStudioImageResponse = /** @class */ (function (_super) {
    __extends(HeadStudioImageResponse, _super);
    function HeadStudioImageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], HeadStudioImageResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], HeadStudioImageResponse.prototype, "headStudioImage200ImageWildcardBinaryString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], HeadStudioImageResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], HeadStudioImageResponse.prototype, "statusCode", void 0);
    return HeadStudioImageResponse;
}(SpeakeasyBase));
export { HeadStudioImageResponse };
