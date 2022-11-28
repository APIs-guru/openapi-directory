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
var GetItemImage2PathParams = /** @class */ (function (_super) {
    __extends(GetItemImage2PathParams, _super);
    function GetItemImage2PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], GetItemImage2PathParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=imageIndex" }),
        __metadata("design:type", Number)
    ], GetItemImage2PathParams.prototype, "imageIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=imageType" }),
        __metadata("design:type", String)
    ], GetItemImage2PathParams.prototype, "imageType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], GetItemImage2PathParams.prototype, "itemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=maxHeight" }),
        __metadata("design:type", Number)
    ], GetItemImage2PathParams.prototype, "maxHeight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=maxWidth" }),
        __metadata("design:type", Number)
    ], GetItemImage2PathParams.prototype, "maxWidth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=percentPlayed" }),
        __metadata("design:type", Number)
    ], GetItemImage2PathParams.prototype, "percentPlayed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tag" }),
        __metadata("design:type", String)
    ], GetItemImage2PathParams.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=unplayedCount" }),
        __metadata("design:type", Number)
    ], GetItemImage2PathParams.prototype, "unplayedCount", void 0);
    return GetItemImage2PathParams;
}(SpeakeasyBase));
export { GetItemImage2PathParams };
var GetItemImage2QueryParams = /** @class */ (function (_super) {
    __extends(GetItemImage2QueryParams, _super);
    function GetItemImage2QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=addPlayedIndicator" }),
        __metadata("design:type", Boolean)
    ], GetItemImage2QueryParams.prototype, "addPlayedIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=backgroundColor" }),
        __metadata("design:type", String)
    ], GetItemImage2QueryParams.prototype, "backgroundColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=blur" }),
        __metadata("design:type", Number)
    ], GetItemImage2QueryParams.prototype, "blur", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cropWhitespace" }),
        __metadata("design:type", Boolean)
    ], GetItemImage2QueryParams.prototype, "cropWhitespace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=foregroundLayer" }),
        __metadata("design:type", String)
    ], GetItemImage2QueryParams.prototype, "foregroundLayer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=height" }),
        __metadata("design:type", Number)
    ], GetItemImage2QueryParams.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quality" }),
        __metadata("design:type", Number)
    ], GetItemImage2QueryParams.prototype, "quality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=width" }),
        __metadata("design:type", Number)
    ], GetItemImage2QueryParams.prototype, "width", void 0);
    return GetItemImage2QueryParams;
}(SpeakeasyBase));
export { GetItemImage2QueryParams };
var GetItemImage2Request = /** @class */ (function (_super) {
    __extends(GetItemImage2Request, _super);
    function GetItemImage2Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetItemImage2PathParams)
    ], GetItemImage2Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetItemImage2QueryParams)
    ], GetItemImage2Request.prototype, "queryParams", void 0);
    return GetItemImage2Request;
}(SpeakeasyBase));
export { GetItemImage2Request };
var GetItemImage2Response = /** @class */ (function (_super) {
    __extends(GetItemImage2Response, _super);
    function GetItemImage2Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetItemImage2Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetItemImage2Response.prototype, "getItemImage2200ImageWildcardBinaryString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetItemImage2Response.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetItemImage2Response.prototype, "statusCode", void 0);
    return GetItemImage2Response;
}(SpeakeasyBase));
export { GetItemImage2Response };
