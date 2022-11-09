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
var GetInstancesIdAttachmentsNameIsCompressedPathParams = /** @class */ (function (_super) {
    __extends(GetInstancesIdAttachmentsNameIsCompressedPathParams, _super);
    function GetInstancesIdAttachmentsNameIsCompressedPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetInstancesIdAttachmentsNameIsCompressedPathParams.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], GetInstancesIdAttachmentsNameIsCompressedPathParams.prototype, "name", void 0);
    return GetInstancesIdAttachmentsNameIsCompressedPathParams;
}(SpeakeasyBase));
export { GetInstancesIdAttachmentsNameIsCompressedPathParams };
var GetInstancesIdAttachmentsNameIsCompressedHeaders = /** @class */ (function (_super) {
    __extends(GetInstancesIdAttachmentsNameIsCompressedHeaders, _super);
    function GetInstancesIdAttachmentsNameIsCompressedHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" }),
        __metadata("design:type", String)
    ], GetInstancesIdAttachmentsNameIsCompressedHeaders.prototype, "ifNoneMatch", void 0);
    return GetInstancesIdAttachmentsNameIsCompressedHeaders;
}(SpeakeasyBase));
export { GetInstancesIdAttachmentsNameIsCompressedHeaders };
var GetInstancesIdAttachmentsNameIsCompressedRequest = /** @class */ (function (_super) {
    __extends(GetInstancesIdAttachmentsNameIsCompressedRequest, _super);
    function GetInstancesIdAttachmentsNameIsCompressedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetInstancesIdAttachmentsNameIsCompressedPathParams)
    ], GetInstancesIdAttachmentsNameIsCompressedRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetInstancesIdAttachmentsNameIsCompressedHeaders)
    ], GetInstancesIdAttachmentsNameIsCompressedRequest.prototype, "headers", void 0);
    return GetInstancesIdAttachmentsNameIsCompressedRequest;
}(SpeakeasyBase));
export { GetInstancesIdAttachmentsNameIsCompressedRequest };
var GetInstancesIdAttachmentsNameIsCompressedResponse = /** @class */ (function (_super) {
    __extends(GetInstancesIdAttachmentsNameIsCompressedResponse, _super);
    function GetInstancesIdAttachmentsNameIsCompressedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetInstancesIdAttachmentsNameIsCompressedResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetInstancesIdAttachmentsNameIsCompressedResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], GetInstancesIdAttachmentsNameIsCompressedResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetInstancesIdAttachmentsNameIsCompressedResponse.prototype, "statusCode", void 0);
    return GetInstancesIdAttachmentsNameIsCompressedResponse;
}(SpeakeasyBase));
export { GetInstancesIdAttachmentsNameIsCompressedResponse };
