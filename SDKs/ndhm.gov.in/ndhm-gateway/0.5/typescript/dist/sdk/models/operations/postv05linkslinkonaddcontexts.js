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
var PostV05LinksLinkOnAddContextsHeaders = /** @class */ (function (_super) {
    __extends(PostV05LinksLinkOnAddContextsHeaders, _super);
    function PostV05LinksLinkOnAddContextsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PostV05LinksLinkOnAddContextsHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-HIP-ID" }),
        __metadata("design:type", String)
    ], PostV05LinksLinkOnAddContextsHeaders.prototype, "xHipId", void 0);
    return PostV05LinksLinkOnAddContextsHeaders;
}(SpeakeasyBase));
export { PostV05LinksLinkOnAddContextsHeaders };
var PostV05LinksLinkOnAddContextsRequests = /** @class */ (function (_super) {
    __extends(PostV05LinksLinkOnAddContextsRequests, _super);
    function PostV05LinksLinkOnAddContextsRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostV05LinksLinkOnAddContextsRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PatientCareContextLinkResponse)
    ], PostV05LinksLinkOnAddContextsRequests.prototype, "patientCareContextLinkResponse", void 0);
    return PostV05LinksLinkOnAddContextsRequests;
}(SpeakeasyBase));
export { PostV05LinksLinkOnAddContextsRequests };
var PostV05LinksLinkOnAddContextsRequest = /** @class */ (function (_super) {
    __extends(PostV05LinksLinkOnAddContextsRequest, _super);
    function PostV05LinksLinkOnAddContextsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05LinksLinkOnAddContextsHeaders)
    ], PostV05LinksLinkOnAddContextsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05LinksLinkOnAddContextsRequests)
    ], PostV05LinksLinkOnAddContextsRequest.prototype, "request", void 0);
    return PostV05LinksLinkOnAddContextsRequest;
}(SpeakeasyBase));
export { PostV05LinksLinkOnAddContextsRequest };
var PostV05LinksLinkOnAddContextsResponse = /** @class */ (function (_super) {
    __extends(PostV05LinksLinkOnAddContextsResponse, _super);
    function PostV05LinksLinkOnAddContextsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostV05LinksLinkOnAddContextsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostV05LinksLinkOnAddContextsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], PostV05LinksLinkOnAddContextsResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostV05LinksLinkOnAddContextsResponse.prototype, "statusCode", void 0);
    return PostV05LinksLinkOnAddContextsResponse;
}(SpeakeasyBase));
export { PostV05LinksLinkOnAddContextsResponse };
