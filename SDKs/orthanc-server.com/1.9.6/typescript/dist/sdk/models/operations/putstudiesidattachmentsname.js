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
var PutStudiesIdAttachmentsNamePathParams = /** @class */ (function (_super) {
    __extends(PutStudiesIdAttachmentsNamePathParams, _super);
    function PutStudiesIdAttachmentsNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutStudiesIdAttachmentsNamePathParams.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], PutStudiesIdAttachmentsNamePathParams.prototype, "name", void 0);
    return PutStudiesIdAttachmentsNamePathParams;
}(SpeakeasyBase));
export { PutStudiesIdAttachmentsNamePathParams };
var PutStudiesIdAttachmentsNameHeaders = /** @class */ (function (_super) {
    __extends(PutStudiesIdAttachmentsNameHeaders, _super);
    function PutStudiesIdAttachmentsNameHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=If-Match" }),
        __metadata("design:type", String)
    ], PutStudiesIdAttachmentsNameHeaders.prototype, "ifMatch", void 0);
    return PutStudiesIdAttachmentsNameHeaders;
}(SpeakeasyBase));
export { PutStudiesIdAttachmentsNameHeaders };
var PutStudiesIdAttachmentsNameRequest = /** @class */ (function (_super) {
    __extends(PutStudiesIdAttachmentsNameRequest, _super);
    function PutStudiesIdAttachmentsNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PutStudiesIdAttachmentsNamePathParams)
    ], PutStudiesIdAttachmentsNameRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PutStudiesIdAttachmentsNameHeaders)
    ], PutStudiesIdAttachmentsNameRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/octet-stream" }),
        __metadata("design:type", Uint8Array)
    ], PutStudiesIdAttachmentsNameRequest.prototype, "request", void 0);
    return PutStudiesIdAttachmentsNameRequest;
}(SpeakeasyBase));
export { PutStudiesIdAttachmentsNameRequest };
var PutStudiesIdAttachmentsNameResponse = /** @class */ (function (_super) {
    __extends(PutStudiesIdAttachmentsNameResponse, _super);
    function PutStudiesIdAttachmentsNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PutStudiesIdAttachmentsNameResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutStudiesIdAttachmentsNameResponse.prototype, "putStudiesIdAttachmentsName200ApplicationJsonAny", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PutStudiesIdAttachmentsNameResponse.prototype, "statusCode", void 0);
    return PutStudiesIdAttachmentsNameResponse;
}(SpeakeasyBase));
export { PutStudiesIdAttachmentsNameResponse };
