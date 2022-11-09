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
var GetStudiesIdMetadataNamePathParams = /** @class */ (function (_super) {
    __extends(GetStudiesIdMetadataNamePathParams, _super);
    function GetStudiesIdMetadataNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetStudiesIdMetadataNamePathParams.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], GetStudiesIdMetadataNamePathParams.prototype, "name", void 0);
    return GetStudiesIdMetadataNamePathParams;
}(SpeakeasyBase));
export { GetStudiesIdMetadataNamePathParams };
var GetStudiesIdMetadataNameHeaders = /** @class */ (function (_super) {
    __extends(GetStudiesIdMetadataNameHeaders, _super);
    function GetStudiesIdMetadataNameHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" }),
        __metadata("design:type", String)
    ], GetStudiesIdMetadataNameHeaders.prototype, "ifNoneMatch", void 0);
    return GetStudiesIdMetadataNameHeaders;
}(SpeakeasyBase));
export { GetStudiesIdMetadataNameHeaders };
var GetStudiesIdMetadataNameRequest = /** @class */ (function (_super) {
    __extends(GetStudiesIdMetadataNameRequest, _super);
    function GetStudiesIdMetadataNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetStudiesIdMetadataNamePathParams)
    ], GetStudiesIdMetadataNameRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetStudiesIdMetadataNameHeaders)
    ], GetStudiesIdMetadataNameRequest.prototype, "headers", void 0);
    return GetStudiesIdMetadataNameRequest;
}(SpeakeasyBase));
export { GetStudiesIdMetadataNameRequest };
var GetStudiesIdMetadataNameResponse = /** @class */ (function (_super) {
    __extends(GetStudiesIdMetadataNameResponse, _super);
    function GetStudiesIdMetadataNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetStudiesIdMetadataNameResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetStudiesIdMetadataNameResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], GetStudiesIdMetadataNameResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetStudiesIdMetadataNameResponse.prototype, "statusCode", void 0);
    return GetStudiesIdMetadataNameResponse;
}(SpeakeasyBase));
export { GetStudiesIdMetadataNameResponse };
