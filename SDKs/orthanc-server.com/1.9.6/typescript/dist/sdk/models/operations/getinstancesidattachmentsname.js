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
var GetInstancesIdAttachmentsNamePathParams = /** @class */ (function (_super) {
    __extends(GetInstancesIdAttachmentsNamePathParams, _super);
    function GetInstancesIdAttachmentsNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetInstancesIdAttachmentsNamePathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], GetInstancesIdAttachmentsNamePathParams.prototype, "name", void 0);
    return GetInstancesIdAttachmentsNamePathParams;
}(SpeakeasyBase));
export { GetInstancesIdAttachmentsNamePathParams };
var GetInstancesIdAttachmentsNameHeaders = /** @class */ (function (_super) {
    __extends(GetInstancesIdAttachmentsNameHeaders, _super);
    function GetInstancesIdAttachmentsNameHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" }),
        __metadata("design:type", String)
    ], GetInstancesIdAttachmentsNameHeaders.prototype, "ifNoneMatch", void 0);
    return GetInstancesIdAttachmentsNameHeaders;
}(SpeakeasyBase));
export { GetInstancesIdAttachmentsNameHeaders };
var GetInstancesIdAttachmentsNameRequest = /** @class */ (function (_super) {
    __extends(GetInstancesIdAttachmentsNameRequest, _super);
    function GetInstancesIdAttachmentsNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInstancesIdAttachmentsNamePathParams)
    ], GetInstancesIdAttachmentsNameRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInstancesIdAttachmentsNameHeaders)
    ], GetInstancesIdAttachmentsNameRequest.prototype, "headers", void 0);
    return GetInstancesIdAttachmentsNameRequest;
}(SpeakeasyBase));
export { GetInstancesIdAttachmentsNameRequest };
var GetInstancesIdAttachmentsNameResponse = /** @class */ (function (_super) {
    __extends(GetInstancesIdAttachmentsNameResponse, _super);
    function GetInstancesIdAttachmentsNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetInstancesIdAttachmentsNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetInstancesIdAttachmentsNameResponse.prototype, "getInstancesIdAttachmentsName200ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetInstancesIdAttachmentsNameResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetInstancesIdAttachmentsNameResponse.prototype, "statusCode", void 0);
    return GetInstancesIdAttachmentsNameResponse;
}(SpeakeasyBase));
export { GetInstancesIdAttachmentsNameResponse };
