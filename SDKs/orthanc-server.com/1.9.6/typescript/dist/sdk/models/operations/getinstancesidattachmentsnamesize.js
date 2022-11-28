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
var GetInstancesIdAttachmentsNameSizePathParams = /** @class */ (function (_super) {
    __extends(GetInstancesIdAttachmentsNameSizePathParams, _super);
    function GetInstancesIdAttachmentsNameSizePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetInstancesIdAttachmentsNameSizePathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], GetInstancesIdAttachmentsNameSizePathParams.prototype, "name", void 0);
    return GetInstancesIdAttachmentsNameSizePathParams;
}(SpeakeasyBase));
export { GetInstancesIdAttachmentsNameSizePathParams };
var GetInstancesIdAttachmentsNameSizeHeaders = /** @class */ (function (_super) {
    __extends(GetInstancesIdAttachmentsNameSizeHeaders, _super);
    function GetInstancesIdAttachmentsNameSizeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" }),
        __metadata("design:type", String)
    ], GetInstancesIdAttachmentsNameSizeHeaders.prototype, "ifNoneMatch", void 0);
    return GetInstancesIdAttachmentsNameSizeHeaders;
}(SpeakeasyBase));
export { GetInstancesIdAttachmentsNameSizeHeaders };
var GetInstancesIdAttachmentsNameSizeRequest = /** @class */ (function (_super) {
    __extends(GetInstancesIdAttachmentsNameSizeRequest, _super);
    function GetInstancesIdAttachmentsNameSizeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInstancesIdAttachmentsNameSizePathParams)
    ], GetInstancesIdAttachmentsNameSizeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInstancesIdAttachmentsNameSizeHeaders)
    ], GetInstancesIdAttachmentsNameSizeRequest.prototype, "headers", void 0);
    return GetInstancesIdAttachmentsNameSizeRequest;
}(SpeakeasyBase));
export { GetInstancesIdAttachmentsNameSizeRequest };
var GetInstancesIdAttachmentsNameSizeResponse = /** @class */ (function (_super) {
    __extends(GetInstancesIdAttachmentsNameSizeResponse, _super);
    function GetInstancesIdAttachmentsNameSizeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetInstancesIdAttachmentsNameSizeResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetInstancesIdAttachmentsNameSizeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetInstancesIdAttachmentsNameSizeResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetInstancesIdAttachmentsNameSizeResponse.prototype, "statusCode", void 0);
    return GetInstancesIdAttachmentsNameSizeResponse;
}(SpeakeasyBase));
export { GetInstancesIdAttachmentsNameSizeResponse };
