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
var GetStudiesIdAttachmentsNameSizePathParams = /** @class */ (function (_super) {
    __extends(GetStudiesIdAttachmentsNameSizePathParams, _super);
    function GetStudiesIdAttachmentsNameSizePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetStudiesIdAttachmentsNameSizePathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], GetStudiesIdAttachmentsNameSizePathParams.prototype, "name", void 0);
    return GetStudiesIdAttachmentsNameSizePathParams;
}(SpeakeasyBase));
export { GetStudiesIdAttachmentsNameSizePathParams };
var GetStudiesIdAttachmentsNameSizeHeaders = /** @class */ (function (_super) {
    __extends(GetStudiesIdAttachmentsNameSizeHeaders, _super);
    function GetStudiesIdAttachmentsNameSizeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" }),
        __metadata("design:type", String)
    ], GetStudiesIdAttachmentsNameSizeHeaders.prototype, "ifNoneMatch", void 0);
    return GetStudiesIdAttachmentsNameSizeHeaders;
}(SpeakeasyBase));
export { GetStudiesIdAttachmentsNameSizeHeaders };
var GetStudiesIdAttachmentsNameSizeRequest = /** @class */ (function (_super) {
    __extends(GetStudiesIdAttachmentsNameSizeRequest, _super);
    function GetStudiesIdAttachmentsNameSizeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetStudiesIdAttachmentsNameSizePathParams)
    ], GetStudiesIdAttachmentsNameSizeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetStudiesIdAttachmentsNameSizeHeaders)
    ], GetStudiesIdAttachmentsNameSizeRequest.prototype, "headers", void 0);
    return GetStudiesIdAttachmentsNameSizeRequest;
}(SpeakeasyBase));
export { GetStudiesIdAttachmentsNameSizeRequest };
var GetStudiesIdAttachmentsNameSizeResponse = /** @class */ (function (_super) {
    __extends(GetStudiesIdAttachmentsNameSizeResponse, _super);
    function GetStudiesIdAttachmentsNameSizeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetStudiesIdAttachmentsNameSizeResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetStudiesIdAttachmentsNameSizeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetStudiesIdAttachmentsNameSizeResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetStudiesIdAttachmentsNameSizeResponse.prototype, "statusCode", void 0);
    return GetStudiesIdAttachmentsNameSizeResponse;
}(SpeakeasyBase));
export { GetStudiesIdAttachmentsNameSizeResponse };
