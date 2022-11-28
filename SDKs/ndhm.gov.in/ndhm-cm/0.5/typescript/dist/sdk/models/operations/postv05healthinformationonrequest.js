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
var PostV05HealthInformationOnRequestHeaders = /** @class */ (function (_super) {
    __extends(PostV05HealthInformationOnRequestHeaders, _super);
    function PostV05HealthInformationOnRequestHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PostV05HealthInformationOnRequestHeaders.prototype, "authorization", void 0);
    return PostV05HealthInformationOnRequestHeaders;
}(SpeakeasyBase));
export { PostV05HealthInformationOnRequestHeaders };
var PostV05HealthInformationOnRequestRequests = /** @class */ (function (_super) {
    __extends(PostV05HealthInformationOnRequestRequests, _super);
    function PostV05HealthInformationOnRequestRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostV05HealthInformationOnRequestRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.HipHealthInformationRequestAcknowledgement)
    ], PostV05HealthInformationOnRequestRequests.prototype, "hipHealthInformationRequestAcknowledgement", void 0);
    return PostV05HealthInformationOnRequestRequests;
}(SpeakeasyBase));
export { PostV05HealthInformationOnRequestRequests };
var PostV05HealthInformationOnRequestRequest = /** @class */ (function (_super) {
    __extends(PostV05HealthInformationOnRequestRequest, _super);
    function PostV05HealthInformationOnRequestRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05HealthInformationOnRequestHeaders)
    ], PostV05HealthInformationOnRequestRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05HealthInformationOnRequestRequests)
    ], PostV05HealthInformationOnRequestRequest.prototype, "request", void 0);
    return PostV05HealthInformationOnRequestRequest;
}(SpeakeasyBase));
export { PostV05HealthInformationOnRequestRequest };
var PostV05HealthInformationOnRequestResponse = /** @class */ (function (_super) {
    __extends(PostV05HealthInformationOnRequestResponse, _super);
    function PostV05HealthInformationOnRequestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostV05HealthInformationOnRequestResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostV05HealthInformationOnRequestResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], PostV05HealthInformationOnRequestResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostV05HealthInformationOnRequestResponse.prototype, "statusCode", void 0);
    return PostV05HealthInformationOnRequestResponse;
}(SpeakeasyBase));
export { PostV05HealthInformationOnRequestResponse };
