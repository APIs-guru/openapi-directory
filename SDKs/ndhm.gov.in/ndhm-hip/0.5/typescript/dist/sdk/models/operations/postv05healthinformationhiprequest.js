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
export var PostV05HealthInformationHipRequestServerList = [
    "https://your-hrp-server.com",
];
var PostV05HealthInformationHipRequestHeaders = /** @class */ (function (_super) {
    __extends(PostV05HealthInformationHipRequestHeaders, _super);
    function PostV05HealthInformationHipRequestHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PostV05HealthInformationHipRequestHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-HIP-ID" }),
        __metadata("design:type", String)
    ], PostV05HealthInformationHipRequestHeaders.prototype, "xHipId", void 0);
    return PostV05HealthInformationHipRequestHeaders;
}(SpeakeasyBase));
export { PostV05HealthInformationHipRequestHeaders };
var PostV05HealthInformationHipRequestRequests = /** @class */ (function (_super) {
    __extends(PostV05HealthInformationHipRequestRequests, _super);
    function PostV05HealthInformationHipRequestRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostV05HealthInformationHipRequestRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.HipHealthInformationRequest)
    ], PostV05HealthInformationHipRequestRequests.prototype, "hipHealthInformationRequest", void 0);
    return PostV05HealthInformationHipRequestRequests;
}(SpeakeasyBase));
export { PostV05HealthInformationHipRequestRequests };
var PostV05HealthInformationHipRequestRequest = /** @class */ (function (_super) {
    __extends(PostV05HealthInformationHipRequestRequest, _super);
    function PostV05HealthInformationHipRequestRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostV05HealthInformationHipRequestRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05HealthInformationHipRequestHeaders)
    ], PostV05HealthInformationHipRequestRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05HealthInformationHipRequestRequests)
    ], PostV05HealthInformationHipRequestRequest.prototype, "request", void 0);
    return PostV05HealthInformationHipRequestRequest;
}(SpeakeasyBase));
export { PostV05HealthInformationHipRequestRequest };
var PostV05HealthInformationHipRequestResponse = /** @class */ (function (_super) {
    __extends(PostV05HealthInformationHipRequestResponse, _super);
    function PostV05HealthInformationHipRequestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostV05HealthInformationHipRequestResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostV05HealthInformationHipRequestResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], PostV05HealthInformationHipRequestResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostV05HealthInformationHipRequestResponse.prototype, "statusCode", void 0);
    return PostV05HealthInformationHipRequestResponse;
}(SpeakeasyBase));
export { PostV05HealthInformationHipRequestResponse };
