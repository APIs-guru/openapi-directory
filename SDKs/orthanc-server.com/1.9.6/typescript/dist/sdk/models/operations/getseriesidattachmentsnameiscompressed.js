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
var GetSeriesIdAttachmentsNameIsCompressedPathParams = /** @class */ (function (_super) {
    __extends(GetSeriesIdAttachmentsNameIsCompressedPathParams, _super);
    function GetSeriesIdAttachmentsNameIsCompressedPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetSeriesIdAttachmentsNameIsCompressedPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], GetSeriesIdAttachmentsNameIsCompressedPathParams.prototype, "name", void 0);
    return GetSeriesIdAttachmentsNameIsCompressedPathParams;
}(SpeakeasyBase));
export { GetSeriesIdAttachmentsNameIsCompressedPathParams };
var GetSeriesIdAttachmentsNameIsCompressedHeaders = /** @class */ (function (_super) {
    __extends(GetSeriesIdAttachmentsNameIsCompressedHeaders, _super);
    function GetSeriesIdAttachmentsNameIsCompressedHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" }),
        __metadata("design:type", String)
    ], GetSeriesIdAttachmentsNameIsCompressedHeaders.prototype, "ifNoneMatch", void 0);
    return GetSeriesIdAttachmentsNameIsCompressedHeaders;
}(SpeakeasyBase));
export { GetSeriesIdAttachmentsNameIsCompressedHeaders };
var GetSeriesIdAttachmentsNameIsCompressedRequest = /** @class */ (function (_super) {
    __extends(GetSeriesIdAttachmentsNameIsCompressedRequest, _super);
    function GetSeriesIdAttachmentsNameIsCompressedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSeriesIdAttachmentsNameIsCompressedPathParams)
    ], GetSeriesIdAttachmentsNameIsCompressedRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSeriesIdAttachmentsNameIsCompressedHeaders)
    ], GetSeriesIdAttachmentsNameIsCompressedRequest.prototype, "headers", void 0);
    return GetSeriesIdAttachmentsNameIsCompressedRequest;
}(SpeakeasyBase));
export { GetSeriesIdAttachmentsNameIsCompressedRequest };
var GetSeriesIdAttachmentsNameIsCompressedResponse = /** @class */ (function (_super) {
    __extends(GetSeriesIdAttachmentsNameIsCompressedResponse, _super);
    function GetSeriesIdAttachmentsNameIsCompressedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetSeriesIdAttachmentsNameIsCompressedResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSeriesIdAttachmentsNameIsCompressedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetSeriesIdAttachmentsNameIsCompressedResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSeriesIdAttachmentsNameIsCompressedResponse.prototype, "statusCode", void 0);
    return GetSeriesIdAttachmentsNameIsCompressedResponse;
}(SpeakeasyBase));
export { GetSeriesIdAttachmentsNameIsCompressedResponse };
