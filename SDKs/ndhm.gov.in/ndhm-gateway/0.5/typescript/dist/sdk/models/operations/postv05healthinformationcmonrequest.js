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
import * as shared from "../shared";
var PostV05HealthInformationCmOnRequestHeaders = /** @class */ (function (_super) {
    __extends(PostV05HealthInformationCmOnRequestHeaders, _super);
    function PostV05HealthInformationCmOnRequestHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PostV05HealthInformationCmOnRequestHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-HIU-ID" }),
        __metadata("design:type", String)
    ], PostV05HealthInformationCmOnRequestHeaders.prototype, "xHiuId", void 0);
    return PostV05HealthInformationCmOnRequestHeaders;
}(SpeakeasyBase));
export { PostV05HealthInformationCmOnRequestHeaders };
var PostV05HealthInformationCmOnRequestRequests = /** @class */ (function (_super) {
    __extends(PostV05HealthInformationCmOnRequestRequests, _super);
    function PostV05HealthInformationCmOnRequestRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostV05HealthInformationCmOnRequestRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.HiuHealthInformationRequestResponse)
    ], PostV05HealthInformationCmOnRequestRequests.prototype, "hiuHealthInformationRequestResponse", void 0);
    return PostV05HealthInformationCmOnRequestRequests;
}(SpeakeasyBase));
export { PostV05HealthInformationCmOnRequestRequests };
var PostV05HealthInformationCmOnRequestRequest = /** @class */ (function (_super) {
    __extends(PostV05HealthInformationCmOnRequestRequest, _super);
    function PostV05HealthInformationCmOnRequestRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05HealthInformationCmOnRequestHeaders)
    ], PostV05HealthInformationCmOnRequestRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05HealthInformationCmOnRequestRequests)
    ], PostV05HealthInformationCmOnRequestRequest.prototype, "request", void 0);
    return PostV05HealthInformationCmOnRequestRequest;
}(SpeakeasyBase));
export { PostV05HealthInformationCmOnRequestRequest };
var PostV05HealthInformationCmOnRequestResponse = /** @class */ (function (_super) {
    __extends(PostV05HealthInformationCmOnRequestResponse, _super);
    function PostV05HealthInformationCmOnRequestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostV05HealthInformationCmOnRequestResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostV05HealthInformationCmOnRequestResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], PostV05HealthInformationCmOnRequestResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostV05HealthInformationCmOnRequestResponse.prototype, "statusCode", void 0);
    return PostV05HealthInformationCmOnRequestResponse;
}(SpeakeasyBase));
export { PostV05HealthInformationCmOnRequestResponse };
