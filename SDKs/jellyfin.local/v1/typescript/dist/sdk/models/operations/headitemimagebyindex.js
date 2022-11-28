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
var HeadItemImageByIndexPathParams = /** @class */ (function (_super) {
    __extends(HeadItemImageByIndexPathParams, _super);
    function HeadItemImageByIndexPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=imageIndex" }),
        __metadata("design:type", Number)
    ], HeadItemImageByIndexPathParams.prototype, "imageIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=imageType" }),
        __metadata("design:type", String)
    ], HeadItemImageByIndexPathParams.prototype, "imageType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], HeadItemImageByIndexPathParams.prototype, "itemId", void 0);
    return HeadItemImageByIndexPathParams;
}(SpeakeasyBase));
export { HeadItemImageByIndexPathParams };
var HeadItemImageByIndexQueryParams = /** @class */ (function (_super) {
    __extends(HeadItemImageByIndexQueryParams, _super);
    function HeadItemImageByIndexQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=addPlayedIndicator" }),
        __metadata("design:type", Boolean)
    ], HeadItemImageByIndexQueryParams.prototype, "addPlayedIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=backgroundColor" }),
        __metadata("design:type", String)
    ], HeadItemImageByIndexQueryParams.prototype, "backgroundColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=blur" }),
        __metadata("design:type", Number)
    ], HeadItemImageByIndexQueryParams.prototype, "blur", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cropWhitespace" }),
        __metadata("design:type", Boolean)
    ], HeadItemImageByIndexQueryParams.prototype, "cropWhitespace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=foregroundLayer" }),
        __metadata("design:type", String)
    ], HeadItemImageByIndexQueryParams.prototype, "foregroundLayer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], HeadItemImageByIndexQueryParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=height" }),
        __metadata("design:type", Number)
    ], HeadItemImageByIndexQueryParams.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxHeight" }),
        __metadata("design:type", Number)
    ], HeadItemImageByIndexQueryParams.prototype, "maxHeight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxWidth" }),
        __metadata("design:type", Number)
    ], HeadItemImageByIndexQueryParams.prototype, "maxWidth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=percentPlayed" }),
        __metadata("design:type", Number)
    ], HeadItemImageByIndexQueryParams.prototype, "percentPlayed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quality" }),
        __metadata("design:type", Number)
    ], HeadItemImageByIndexQueryParams.prototype, "quality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" }),
        __metadata("design:type", String)
    ], HeadItemImageByIndexQueryParams.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unplayedCount" }),
        __metadata("design:type", Number)
    ], HeadItemImageByIndexQueryParams.prototype, "unplayedCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=width" }),
        __metadata("design:type", Number)
    ], HeadItemImageByIndexQueryParams.prototype, "width", void 0);
    return HeadItemImageByIndexQueryParams;
}(SpeakeasyBase));
export { HeadItemImageByIndexQueryParams };
var HeadItemImageByIndexRequest = /** @class */ (function (_super) {
    __extends(HeadItemImageByIndexRequest, _super);
    function HeadItemImageByIndexRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HeadItemImageByIndexPathParams)
    ], HeadItemImageByIndexRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HeadItemImageByIndexQueryParams)
    ], HeadItemImageByIndexRequest.prototype, "queryParams", void 0);
    return HeadItemImageByIndexRequest;
}(SpeakeasyBase));
export { HeadItemImageByIndexRequest };
var HeadItemImageByIndexResponse = /** @class */ (function (_super) {
    __extends(HeadItemImageByIndexResponse, _super);
    function HeadItemImageByIndexResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], HeadItemImageByIndexResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], HeadItemImageByIndexResponse.prototype, "headItemImageByIndex200ImageWildcardBinaryString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], HeadItemImageByIndexResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], HeadItemImageByIndexResponse.prototype, "statusCode", void 0);
    return HeadItemImageByIndexResponse;
}(SpeakeasyBase));
export { HeadItemImageByIndexResponse };
