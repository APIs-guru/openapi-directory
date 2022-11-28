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
export var PostV05HealthInformationHiuOnRequestServerList = [
    "https://dev.ndhm.gov.in/hiu",
];
var PostV05HealthInformationHiuOnRequestHeaders = /** @class */ (function (_super) {
    __extends(PostV05HealthInformationHiuOnRequestHeaders, _super);
    function PostV05HealthInformationHiuOnRequestHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PostV05HealthInformationHiuOnRequestHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-HIU-ID" }),
        __metadata("design:type", String)
    ], PostV05HealthInformationHiuOnRequestHeaders.prototype, "xHiuId", void 0);
    return PostV05HealthInformationHiuOnRequestHeaders;
}(SpeakeasyBase));
export { PostV05HealthInformationHiuOnRequestHeaders };
var PostV05HealthInformationHiuOnRequestRequests = /** @class */ (function (_super) {
    __extends(PostV05HealthInformationHiuOnRequestRequests, _super);
    function PostV05HealthInformationHiuOnRequestRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostV05HealthInformationHiuOnRequestRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.HiuHealthInformationRequestResponse)
    ], PostV05HealthInformationHiuOnRequestRequests.prototype, "hiuHealthInformationRequestResponse", void 0);
    return PostV05HealthInformationHiuOnRequestRequests;
}(SpeakeasyBase));
export { PostV05HealthInformationHiuOnRequestRequests };
var PostV05HealthInformationHiuOnRequestRequest = /** @class */ (function (_super) {
    __extends(PostV05HealthInformationHiuOnRequestRequest, _super);
    function PostV05HealthInformationHiuOnRequestRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostV05HealthInformationHiuOnRequestRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05HealthInformationHiuOnRequestHeaders)
    ], PostV05HealthInformationHiuOnRequestRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05HealthInformationHiuOnRequestRequests)
    ], PostV05HealthInformationHiuOnRequestRequest.prototype, "request", void 0);
    return PostV05HealthInformationHiuOnRequestRequest;
}(SpeakeasyBase));
export { PostV05HealthInformationHiuOnRequestRequest };
var PostV05HealthInformationHiuOnRequestResponse = /** @class */ (function (_super) {
    __extends(PostV05HealthInformationHiuOnRequestResponse, _super);
    function PostV05HealthInformationHiuOnRequestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostV05HealthInformationHiuOnRequestResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostV05HealthInformationHiuOnRequestResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], PostV05HealthInformationHiuOnRequestResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostV05HealthInformationHiuOnRequestResponse.prototype, "statusCode", void 0);
    return PostV05HealthInformationHiuOnRequestResponse;
}(SpeakeasyBase));
export { PostV05HealthInformationHiuOnRequestResponse };
