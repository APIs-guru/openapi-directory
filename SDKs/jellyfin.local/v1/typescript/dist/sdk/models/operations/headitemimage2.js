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
var HeadItemImage2PathParams = /** @class */ (function (_super) {
    __extends(HeadItemImage2PathParams, _super);
    function HeadItemImage2PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], HeadItemImage2PathParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=imageIndex" }),
        __metadata("design:type", Number)
    ], HeadItemImage2PathParams.prototype, "imageIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=imageType" }),
        __metadata("design:type", String)
    ], HeadItemImage2PathParams.prototype, "imageType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], HeadItemImage2PathParams.prototype, "itemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=maxHeight" }),
        __metadata("design:type", Number)
    ], HeadItemImage2PathParams.prototype, "maxHeight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=maxWidth" }),
        __metadata("design:type", Number)
    ], HeadItemImage2PathParams.prototype, "maxWidth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=percentPlayed" }),
        __metadata("design:type", Number)
    ], HeadItemImage2PathParams.prototype, "percentPlayed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tag" }),
        __metadata("design:type", String)
    ], HeadItemImage2PathParams.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=unplayedCount" }),
        __metadata("design:type", Number)
    ], HeadItemImage2PathParams.prototype, "unplayedCount", void 0);
    return HeadItemImage2PathParams;
}(SpeakeasyBase));
export { HeadItemImage2PathParams };
var HeadItemImage2QueryParams = /** @class */ (function (_super) {
    __extends(HeadItemImage2QueryParams, _super);
    function HeadItemImage2QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=addPlayedIndicator" }),
        __metadata("design:type", Boolean)
    ], HeadItemImage2QueryParams.prototype, "addPlayedIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=backgroundColor" }),
        __metadata("design:type", String)
    ], HeadItemImage2QueryParams.prototype, "backgroundColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=blur" }),
        __metadata("design:type", Number)
    ], HeadItemImage2QueryParams.prototype, "blur", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cropWhitespace" }),
        __metadata("design:type", Boolean)
    ], HeadItemImage2QueryParams.prototype, "cropWhitespace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=foregroundLayer" }),
        __metadata("design:type", String)
    ], HeadItemImage2QueryParams.prototype, "foregroundLayer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=height" }),
        __metadata("design:type", Number)
    ], HeadItemImage2QueryParams.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quality" }),
        __metadata("design:type", Number)
    ], HeadItemImage2QueryParams.prototype, "quality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=width" }),
        __metadata("design:type", Number)
    ], HeadItemImage2QueryParams.prototype, "width", void 0);
    return HeadItemImage2QueryParams;
}(SpeakeasyBase));
export { HeadItemImage2QueryParams };
var HeadItemImage2Request = /** @class */ (function (_super) {
    __extends(HeadItemImage2Request, _super);
    function HeadItemImage2Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HeadItemImage2PathParams)
    ], HeadItemImage2Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HeadItemImage2QueryParams)
    ], HeadItemImage2Request.prototype, "queryParams", void 0);
    return HeadItemImage2Request;
}(SpeakeasyBase));
export { HeadItemImage2Request };
var HeadItemImage2Response = /** @class */ (function (_super) {
    __extends(HeadItemImage2Response, _super);
    function HeadItemImage2Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], HeadItemImage2Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], HeadItemImage2Response.prototype, "headItemImage2200ImageWildcardBinaryString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], HeadItemImage2Response.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], HeadItemImage2Response.prototype, "statusCode", void 0);
    return HeadItemImage2Response;
}(SpeakeasyBase));
export { HeadItemImage2Response };
