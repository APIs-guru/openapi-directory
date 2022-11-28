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
var GetSeriesIdAttachmentsNameDataPathParams = /** @class */ (function (_super) {
    __extends(GetSeriesIdAttachmentsNameDataPathParams, _super);
    function GetSeriesIdAttachmentsNameDataPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetSeriesIdAttachmentsNameDataPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], GetSeriesIdAttachmentsNameDataPathParams.prototype, "name", void 0);
    return GetSeriesIdAttachmentsNameDataPathParams;
}(SpeakeasyBase));
export { GetSeriesIdAttachmentsNameDataPathParams };
var GetSeriesIdAttachmentsNameDataHeaders = /** @class */ (function (_super) {
    __extends(GetSeriesIdAttachmentsNameDataHeaders, _super);
    function GetSeriesIdAttachmentsNameDataHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" }),
        __metadata("design:type", String)
    ], GetSeriesIdAttachmentsNameDataHeaders.prototype, "ifNoneMatch", void 0);
    return GetSeriesIdAttachmentsNameDataHeaders;
}(SpeakeasyBase));
export { GetSeriesIdAttachmentsNameDataHeaders };
var GetSeriesIdAttachmentsNameDataRequest = /** @class */ (function (_super) {
    __extends(GetSeriesIdAttachmentsNameDataRequest, _super);
    function GetSeriesIdAttachmentsNameDataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSeriesIdAttachmentsNameDataPathParams)
    ], GetSeriesIdAttachmentsNameDataRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSeriesIdAttachmentsNameDataHeaders)
    ], GetSeriesIdAttachmentsNameDataRequest.prototype, "headers", void 0);
    return GetSeriesIdAttachmentsNameDataRequest;
}(SpeakeasyBase));
export { GetSeriesIdAttachmentsNameDataRequest };
var GetSeriesIdAttachmentsNameDataResponse = /** @class */ (function (_super) {
    __extends(GetSeriesIdAttachmentsNameDataResponse, _super);
    function GetSeriesIdAttachmentsNameDataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetSeriesIdAttachmentsNameDataResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSeriesIdAttachmentsNameDataResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetSeriesIdAttachmentsNameDataResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSeriesIdAttachmentsNameDataResponse.prototype, "statusCode", void 0);
    return GetSeriesIdAttachmentsNameDataResponse;
}(SpeakeasyBase));
export { GetSeriesIdAttachmentsNameDataResponse };
