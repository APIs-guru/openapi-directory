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
var PutSeriesIdAttachmentsNamePathParams = /** @class */ (function (_super) {
    __extends(PutSeriesIdAttachmentsNamePathParams, _super);
    function PutSeriesIdAttachmentsNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutSeriesIdAttachmentsNamePathParams.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], PutSeriesIdAttachmentsNamePathParams.prototype, "name", void 0);
    return PutSeriesIdAttachmentsNamePathParams;
}(SpeakeasyBase));
export { PutSeriesIdAttachmentsNamePathParams };
var PutSeriesIdAttachmentsNameHeaders = /** @class */ (function (_super) {
    __extends(PutSeriesIdAttachmentsNameHeaders, _super);
    function PutSeriesIdAttachmentsNameHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=If-Match" }),
        __metadata("design:type", String)
    ], PutSeriesIdAttachmentsNameHeaders.prototype, "ifMatch", void 0);
    return PutSeriesIdAttachmentsNameHeaders;
}(SpeakeasyBase));
export { PutSeriesIdAttachmentsNameHeaders };
var PutSeriesIdAttachmentsNameRequest = /** @class */ (function (_super) {
    __extends(PutSeriesIdAttachmentsNameRequest, _super);
    function PutSeriesIdAttachmentsNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PutSeriesIdAttachmentsNamePathParams)
    ], PutSeriesIdAttachmentsNameRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PutSeriesIdAttachmentsNameHeaders)
    ], PutSeriesIdAttachmentsNameRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/octet-stream" }),
        __metadata("design:type", Uint8Array)
    ], PutSeriesIdAttachmentsNameRequest.prototype, "request", void 0);
    return PutSeriesIdAttachmentsNameRequest;
}(SpeakeasyBase));
export { PutSeriesIdAttachmentsNameRequest };
var PutSeriesIdAttachmentsNameResponse = /** @class */ (function (_super) {
    __extends(PutSeriesIdAttachmentsNameResponse, _super);
    function PutSeriesIdAttachmentsNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PutSeriesIdAttachmentsNameResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PutSeriesIdAttachmentsNameResponse.prototype, "putSeriesIdAttachmentsName200ApplicationJsonAny", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PutSeriesIdAttachmentsNameResponse.prototype, "statusCode", void 0);
    return PutSeriesIdAttachmentsNameResponse;
}(SpeakeasyBase));
export { PutSeriesIdAttachmentsNameResponse };
