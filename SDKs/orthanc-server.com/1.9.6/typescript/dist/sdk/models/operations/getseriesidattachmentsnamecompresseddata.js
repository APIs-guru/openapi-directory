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
var GetSeriesIdAttachmentsNameCompressedDataPathParams = /** @class */ (function (_super) {
    __extends(GetSeriesIdAttachmentsNameCompressedDataPathParams, _super);
    function GetSeriesIdAttachmentsNameCompressedDataPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetSeriesIdAttachmentsNameCompressedDataPathParams.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], GetSeriesIdAttachmentsNameCompressedDataPathParams.prototype, "name", void 0);
    return GetSeriesIdAttachmentsNameCompressedDataPathParams;
}(SpeakeasyBase));
export { GetSeriesIdAttachmentsNameCompressedDataPathParams };
var GetSeriesIdAttachmentsNameCompressedDataHeaders = /** @class */ (function (_super) {
    __extends(GetSeriesIdAttachmentsNameCompressedDataHeaders, _super);
    function GetSeriesIdAttachmentsNameCompressedDataHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" }),
        __metadata("design:type", String)
    ], GetSeriesIdAttachmentsNameCompressedDataHeaders.prototype, "ifNoneMatch", void 0);
    return GetSeriesIdAttachmentsNameCompressedDataHeaders;
}(SpeakeasyBase));
export { GetSeriesIdAttachmentsNameCompressedDataHeaders };
var GetSeriesIdAttachmentsNameCompressedDataRequest = /** @class */ (function (_super) {
    __extends(GetSeriesIdAttachmentsNameCompressedDataRequest, _super);
    function GetSeriesIdAttachmentsNameCompressedDataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetSeriesIdAttachmentsNameCompressedDataPathParams)
    ], GetSeriesIdAttachmentsNameCompressedDataRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetSeriesIdAttachmentsNameCompressedDataHeaders)
    ], GetSeriesIdAttachmentsNameCompressedDataRequest.prototype, "headers", void 0);
    return GetSeriesIdAttachmentsNameCompressedDataRequest;
}(SpeakeasyBase));
export { GetSeriesIdAttachmentsNameCompressedDataRequest };
var GetSeriesIdAttachmentsNameCompressedDataResponse = /** @class */ (function (_super) {
    __extends(GetSeriesIdAttachmentsNameCompressedDataResponse, _super);
    function GetSeriesIdAttachmentsNameCompressedDataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetSeriesIdAttachmentsNameCompressedDataResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetSeriesIdAttachmentsNameCompressedDataResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], GetSeriesIdAttachmentsNameCompressedDataResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetSeriesIdAttachmentsNameCompressedDataResponse.prototype, "statusCode", void 0);
    return GetSeriesIdAttachmentsNameCompressedDataResponse;
}(SpeakeasyBase));
export { GetSeriesIdAttachmentsNameCompressedDataResponse };
