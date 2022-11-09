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
var GetPatientsIdMetadataNamePathParams = /** @class */ (function (_super) {
    __extends(GetPatientsIdMetadataNamePathParams, _super);
    function GetPatientsIdMetadataNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetPatientsIdMetadataNamePathParams.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], GetPatientsIdMetadataNamePathParams.prototype, "name", void 0);
    return GetPatientsIdMetadataNamePathParams;
}(SpeakeasyBase));
export { GetPatientsIdMetadataNamePathParams };
var GetPatientsIdMetadataNameHeaders = /** @class */ (function (_super) {
    __extends(GetPatientsIdMetadataNameHeaders, _super);
    function GetPatientsIdMetadataNameHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" }),
        __metadata("design:type", String)
    ], GetPatientsIdMetadataNameHeaders.prototype, "ifNoneMatch", void 0);
    return GetPatientsIdMetadataNameHeaders;
}(SpeakeasyBase));
export { GetPatientsIdMetadataNameHeaders };
var GetPatientsIdMetadataNameRequest = /** @class */ (function (_super) {
    __extends(GetPatientsIdMetadataNameRequest, _super);
    function GetPatientsIdMetadataNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetPatientsIdMetadataNamePathParams)
    ], GetPatientsIdMetadataNameRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetPatientsIdMetadataNameHeaders)
    ], GetPatientsIdMetadataNameRequest.prototype, "headers", void 0);
    return GetPatientsIdMetadataNameRequest;
}(SpeakeasyBase));
export { GetPatientsIdMetadataNameRequest };
var GetPatientsIdMetadataNameResponse = /** @class */ (function (_super) {
    __extends(GetPatientsIdMetadataNameResponse, _super);
    function GetPatientsIdMetadataNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetPatientsIdMetadataNameResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetPatientsIdMetadataNameResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], GetPatientsIdMetadataNameResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetPatientsIdMetadataNameResponse.prototype, "statusCode", void 0);
    return GetPatientsIdMetadataNameResponse;
}(SpeakeasyBase));
export { GetPatientsIdMetadataNameResponse };
