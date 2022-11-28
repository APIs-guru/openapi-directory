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
var GetPatientsIdAttachmentsNameSizePathParams = /** @class */ (function (_super) {
    __extends(GetPatientsIdAttachmentsNameSizePathParams, _super);
    function GetPatientsIdAttachmentsNameSizePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetPatientsIdAttachmentsNameSizePathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], GetPatientsIdAttachmentsNameSizePathParams.prototype, "name", void 0);
    return GetPatientsIdAttachmentsNameSizePathParams;
}(SpeakeasyBase));
export { GetPatientsIdAttachmentsNameSizePathParams };
var GetPatientsIdAttachmentsNameSizeHeaders = /** @class */ (function (_super) {
    __extends(GetPatientsIdAttachmentsNameSizeHeaders, _super);
    function GetPatientsIdAttachmentsNameSizeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" }),
        __metadata("design:type", String)
    ], GetPatientsIdAttachmentsNameSizeHeaders.prototype, "ifNoneMatch", void 0);
    return GetPatientsIdAttachmentsNameSizeHeaders;
}(SpeakeasyBase));
export { GetPatientsIdAttachmentsNameSizeHeaders };
var GetPatientsIdAttachmentsNameSizeRequest = /** @class */ (function (_super) {
    __extends(GetPatientsIdAttachmentsNameSizeRequest, _super);
    function GetPatientsIdAttachmentsNameSizeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPatientsIdAttachmentsNameSizePathParams)
    ], GetPatientsIdAttachmentsNameSizeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPatientsIdAttachmentsNameSizeHeaders)
    ], GetPatientsIdAttachmentsNameSizeRequest.prototype, "headers", void 0);
    return GetPatientsIdAttachmentsNameSizeRequest;
}(SpeakeasyBase));
export { GetPatientsIdAttachmentsNameSizeRequest };
var GetPatientsIdAttachmentsNameSizeResponse = /** @class */ (function (_super) {
    __extends(GetPatientsIdAttachmentsNameSizeResponse, _super);
    function GetPatientsIdAttachmentsNameSizeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetPatientsIdAttachmentsNameSizeResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPatientsIdAttachmentsNameSizeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetPatientsIdAttachmentsNameSizeResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPatientsIdAttachmentsNameSizeResponse.prototype, "statusCode", void 0);
    return GetPatientsIdAttachmentsNameSizeResponse;
}(SpeakeasyBase));
export { GetPatientsIdAttachmentsNameSizeResponse };
